import { auth } from "../firebaseConfig";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth";

// Sign up
export const registerUser = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password);
};

// Login
export const loginUser = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logoutUser = () => {
	return signOut(auth);
};
