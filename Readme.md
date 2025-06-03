
# Blogging Platform

A full-featured blogging application built with Node.js, Express, EJS, and MongoDB. It supports user authentication with secure session management, post creation and editing, and protected routes for authorized access.

---

## Tech Stack

- **Node.js**
- **Express.js**
- **EJS** (Server-side templating)
- **MongoDB Atlas** with Mongoose
- **express-session** for session-based authentication
- **bcrypt** for password hashing
- **CSS** for basic styling

---

## Features

- User registration and login
- Session-based authentication using `express-session`
- Password encryption with bcrypt
- Authorization to allow only the author to edit/delete their posts
- Create, view, update, and delete blog posts
- Flash messages for feedback (if implemented)
- Middleware-based route protection

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/blog-platform.git
cd blog-platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
SESSION_SECRET=your_secure_session_secret
```

### 4. Run the application

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

---


## Author

**Your Name**
[GitHub Profile](https://github.com/Bharath-S-J)
