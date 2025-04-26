import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBFBdBALyh1z5j9kucbv4bqfQZFBeDx2m8",
	authDomain: "iti-first-project-bcd52.firebaseapp.com",
	projectId: "iti-first-project-bcd52",
	storageBucket: "iti-first-project-bcd52.firebasestorage.app",
	messagingSenderId: "952833819539",
	appId: "1:952833819539:web:8c594eb7a8a0d0f0395e66",
	measurementId: "G-WWX0CL4FXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
