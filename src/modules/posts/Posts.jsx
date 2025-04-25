import React from "react";
import { Link, useNavigate } from "react-router";
import { logoutUser } from "../../services/auth_service";

export default function Posts() {
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logoutUser();
		navigate("/login");
	};
	return (
		<>
			<div>
				<h2>Welcome,</h2>
				<p>If you wanna logout</p>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</>
	);
}
