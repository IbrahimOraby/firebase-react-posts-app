import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { logoutUser } from "../../services/auth_service";
import { createPost } from "../../services/firestore_service";
import { auth } from "../../firebaseConfig";

export default function Posts() {
	const [postContent, setPostContent] = useState("");
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logoutUser();
		navigate("/login");
	};

	const handlePostSubmit = async (e) => {
		e.preventDefault();
		const user = auth.currentUser;
		if (user) {
			console.log(user);
			await createPost(user, postContent);
			setPostContent("");
		} else {
			console.error("No user signed in");
		}
	};

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
		</>
	);
}
