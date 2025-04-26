import { auth } from "../firebaseConfig";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile
} from "firebase/auth";

// Sign up
export const registerUser = async (userName, email, password) => {
	const userCredential = await createUserWithEmailAndPassword(
		auth,
		email,
		password
	);
	await updateProfile(userCredential.user, {
		displayName: userName
	});
	return userCredential;
};

// Login
export const loginUser = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logoutUser = () => {
	return signOut(auth);
};
