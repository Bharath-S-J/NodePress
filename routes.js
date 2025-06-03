const express = require("express");
const router = express.Router()

const { signup, login, register, loginPage, allUsers, logout } = require("./controllers/userController");
const {requireAuth} = require("./utils/auth");
const { home, myBlogs, addBlog, createBlog, deleteBlog, editBlog, updateBlog } = require("./controllers/blogController");

router.get("/login", loginPage);

router.get("/signup",signup);

router.post("/register", register);

router.post("/login", login);

router.get('/allusers', requireAuth, allUsers)

router.get("/logout", logout);

router.get('/', home)

router.get('/home', home)

router.get('/myblogs', requireAuth, myBlogs)

router.get('/addblog', requireAuth, addBlog)

router.get('/editblog', requireAuth, editBlog)

router.post('/createblog', requireAuth, createBlog)

router.post('/updateblog', requireAuth, updateBlog)

router.get('/deleteblog', requireAuth, deleteBlog)


module.exports = router