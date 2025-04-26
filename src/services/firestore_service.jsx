import {
	getFirestore,
	doc,
	setDoc,
	addDoc,
	getDocs,
	getDoc,
	collection,
	serverTimestamp,
	onSnapshot,
	query
} from "firebase/firestore";
import { app } from "../firebaseConfig"; // make sure you have firebase initialized here

const db = getFirestore(app);

export const createUser = async (userData) => {
	try {
		await setDoc(doc(db, "users", userData.uid), {
			uid: userData.uid,
			userName: userData.displayName,
			createdAt: serverTimestamp()
		});
		console.log("User created successfully");
	} catch (error) {
		console.error("Error creating user: ", error);
	}
};

export const createPost = async (userData, content) => {
	try {
		await addDoc(collection(db, "posts"), {
			uid: userData.uid,
			userName: userData.displayName,
			createdAt: serverTimestamp(),
			postContent: content
		});
		console.log("Post created successfully with uid:", userData.uid);
	} catch (error) {
		console.log("Error creating post", error);
	}
};

export const getPosts = (callback) => {
	try {
		const postsQuery = query(collection(db, "posts"));

		const unsub = onSnapshot(postsQuery, (snapshot) => {
			const postsArr = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));
			callback(postsArr);
		});

		return unsub;
	} catch (error) {
		console.log("Error retrieving posts", error);
	}
};
