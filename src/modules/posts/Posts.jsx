import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { logoutUser } from "../../services/auth_service";
import { createPost, getPosts } from "../../services/firestore_service";
import { auth } from "../../firebaseConfig";

export default function Posts() {
	const [postContent, setPostContent] = useState("");
	const navigate = useNavigate();
	const currUser = auth.currentUser;
	const [posts, setPosts] = useState([]);

	const handleLogout = async () => {
		await logoutUser();
		navigate("/login");
	};

	const handlePostSubmit = async (e) => {
		e.preventDefault();
		if (currUser) {
			await createPost(currUser, postContent);
			setPostContent("");
		} else {
			console.error("No user signed in");
		}
	};

	useEffect(() => {
		const unsubscribe = getPosts((postsData) => {
			setPosts(postsData);
		});

		//clean up
		return () => unsubscribe();
	});

	return (
		<>
			<div>
				<h2>Welcome,</h2>
				<p>If you wanna logout</p>
				<button onClick={handleLogout}>Logout</button>
			</div>
			<hr />
			<div>
				<h2>Post</h2>
				<form onSubmit={handlePostSubmit}>
					<input
						type="text"
						placeholder="What's on your mind?"
						value={postContent}
						onChange={(e) => setPostContent(e.target.value)}
					/>
					<button type="submit">Add Post</button>
				</form>
			</div>
			<hr />
			<div>
				<h2>POSTS</h2>
				{posts.map((post) => (
					<div key={post.id}>
						<p>{post.postContent}</p>
						{post.uid === currUser.uid && (
							<div>
								<button>Edit</button>
								<button>Delete</button>
							</div>
						)}
					</div>
				))}
			</div>
		</>
	);
}
