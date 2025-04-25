import React, { useState } from "react";
import { useNavigate } from "react-router";
import { loginUser } from "../../../services/auth_service";
import "../styles/form.css";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (email, password) => {
		try {
			await loginUser(email, password);
			alert("You logined successfully");
			navigate("/posts");
		} catch (err) {
			alert(err.message);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		handleLogin(email, password);
	};

	return (
		<>
			<div className="container">
				<form onSubmit={onSubmit} className="auth-form">
					<h2>Login</h2>
					<div>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
						/>
					</div>
					<div>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
					</div>
					<div>
						<button type="submit">Login</button>
					</div>
				</form>
			</div>
		</>
	);
}
