# NodePress - Blogging Platform

A full-featured blogging application built using Node.js, Express, MongoDB, and EJS. The app allows users to register, log in, create blog posts, and manage their own content securely. Only authenticated users can create, edit, or delete their own posts, ensuring multi-role integrity and secure access control.

---

## ✨ Features

- 📝 **User Registration & Login**
- 🔐 **Session-based Authentication** via `express-session`
- 🔒 **Password Hashing** with `bcrypt` for secure storage
- ✍️ **Create, Read, Update, and Delete Posts**
- 🧑‍💻 **Authorization**:
  - Only the original author can **edit/delete** their own blog posts
- 🛡️ **Protected Routes** using custom middleware
- 📄 **EJS Templates** for dynamic server-side rendering
- 💬 Flash messages for user feedback (if implemented)

---

## 🔧 Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Server framework
- **EJS** – Templating engine for rendering views
- **MongoDB Atlas** – Cloud database
- **Mongoose** – MongoDB ODM for schema modeling
- **express-session** – Session handling and login persistence
- **bcrypt** – Secure password hashing
- **CSS** – Basic styling

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/blog-platform.git
cd blog-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
SESSION_SECRET=your_secure_session_secret
```

### 4. Run the App

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔒 Access Control

* ✅ Only **logged-in users** can create blog posts.
* ✏️ Only the **post's author** can **edit or delete** their own posts.
* ❌ Unauthorized users attempting to access protected routes are redirected or blocked.

---
