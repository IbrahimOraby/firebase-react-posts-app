import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUpForm from "./modules/auth/sign_up/SignUpForm";
import LoginForm from "./modules/auth/login/LoginForm";
import Posts from "./modules/posts/Posts";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignUpForm />}></Route>
				<Route path="/login" element={<LoginForm />}></Route>
				<Route path="/posts" element={<Posts />}></Route>
			</Routes>
		</BrowserRouter>
		// <SignUpForm></SignUpForm>
	);
}

export default App;
