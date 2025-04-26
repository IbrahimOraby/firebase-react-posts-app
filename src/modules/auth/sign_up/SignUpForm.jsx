import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/auth_service";
import "../styles/form.css";
import { createUser } from "../../../services/firestore_service";

export default function SignUpForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userName, setUserName] = useState("");

	const navigate = useNavigate();

	const handleSignUp = async (userName, email, password) => {
		try {
			const userCredential = await registerUser(userName, email, password);
			const uid = userCredential.user.uid;

			await createUser({
				uid,
				email,
				displayName: userName // Ensure your createUser expects this structure
			});

			alert("You signed up successfully");
			navigate("/posts");
		} catch (err) {
			alert(err.message);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		handleSignUp(userName, email, password);
	};
	return (
		<>
			<div className="container">
				<form onSubmit={onSubmit} className="auth-form">
					<h2>Sign Up</h2>
					<div>
						<input
							type="text"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
							placeholder="Username"
						/>
					</div>
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
