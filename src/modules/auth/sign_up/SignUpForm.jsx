import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/auth_service";
import "../styles/form.css";

export default function SignUpForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSignUp = async (email, password) => {
		try {
			await registerUser(email, password);
			alert("You signed up successfully");
			navigate("/posts");
		} catch (err) {
			alert(err.message);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		handleSignUp(email, password);
	};
	return (
		<>
			<div className="container">
				<form onSubmit={onSubmit} className="auth-form">
					<h2>Sign Up</h2>
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
						<button type="submit">Sign Up</button>
					</div>
					<div>
						<p>
							Already Have an Account! <Link to="/login">Login</Link>
						</p>
					</div>
				</form>
			</div>
		</>
	);
}
