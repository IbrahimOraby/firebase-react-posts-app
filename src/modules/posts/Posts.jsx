import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { logoutUser } from "../../services/auth_service";
import {
	createPost,
	getPosts,
	deletePost,
	updatePost
} from "../../services/firestore_service";
import { auth } from "../../firebaseConfig";

export default function Posts() {
	const [postContent, setPostContent] = useState("");
	const navigate = useNavigate();
	const currUser = auth.currentUser;
	const [posts, setPosts] = useState([]);
	const [editingPostId, setEditingPostId] = useState(null);
	const [editedContent, setEditedContent] = useState("");

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

	const handleDeletePost = (pid) => {
		deletePost(pid);
	};
	const handleEditPost = (post) => {
		setEditingPostId(post.id);
		setEditedContent(post.postContent);
	};
	const handleSaveClick = async () => {
		await updatePost(editingPostId, { postContent: editedContent });
		setEditingPostId(null);
		setEditedContent("");
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
				<h2>Add a Post</h2>
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
				<h2>Posts Feed</h2>
				{posts.map((post) => (
					<div key={post.id}>
						{editingPostId === post.id ? (
							<>
								<input
									type="text"
									value={editedContent}
									onChange={(e) => setEditedContent(e.target.value)}
								/>
								<button onClick={handleSaveClick}>Save</button>
							</>
						) : (
							<>
								<p>{post.postContent}</p>
								{post.uid === currUser.uid && (
									<div>
										<button onClick={() => handleEditPost(post)}>Edit</button>
										<button onClick={() => handleDeletePost(post.id)}>
											Delete
										</button>
									</div>
								)}
							</>
						)}
					</div>
				))}
			</div>
		</>
	);
}
