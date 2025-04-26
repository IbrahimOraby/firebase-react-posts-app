# 📝 Mini Posts App

A simple React + Firebase app that allows users to:

- Add new posts
- Edit their own posts
- Delete their own posts
- View all posts in a live feed
- Logout from their session

---

## 🚀 Features

- **Authentication** (basic user session)
- **Create** a new post
- **Edit** a post (only your own posts)
- **Delete** a post (only your own posts)
- **Real-time updates** using Firestore's `onSnapshot`
- **Clean UI** with simple and responsive design

---

## 🛠️ Tech Stack

- **React.js** (Frontend)
- **Firebase Firestore** (Database)
- **Firebase Authentication** (for user sessions)

---

## ⚙️ How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/posts-app.git
   cd posts-app

   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Firebase**

- Create a Firebase project.
- Enable Firestore Database.
- Enable Authentication (e.g., Email/Password or Anonymous).
- Get your Firebase config and paste it inside your project.

4. **Run the app**

   ```bash
   npm run dev
   ```
