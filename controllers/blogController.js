const { response } = require("express")
const Blogs = require("../models/blogs")
const base64 = require("base-64")

const home = async(req,res)=>{
    const perPage = 5
    const page = req.query.page || 1
    const sort = req.query.sort || 'title'

    try{
        const blogs = await Blogs.find()
        .sort({[sort]: 1 })
        .skip((perPage * page) - perPage)
        .limit(perPage)
        const count = await Blogs.countDocuments();
        const totalPages = Math.ceil(count/perPage)
        res.render('home', { message: null,blogData: blogs , current: page, pages: totalPages, sort})


    }catch(error){
          res.render("home", {
      message: null,
      blogData: null
    });
    }
    
}

const myBlogs = async (req,res)=>{
    const {message} = req.query
    const userId = req.session.userId
   const myBlogs = await Blogs.find({userId})
    res.render('myblogs',{ message: message? base64.decode(message) : null, blogData: myBlogs})
}

const addBlog = (req,res)=>{
    res.render('addblog',{ message: null})
}

const editBlog = async (req,res)=>{
    try{
         const {blogId} = req.query
        const blogData = await Blogs.findOne({_id: blogId})
          res.render('editblog',{ message: null, blogData})
    }catch( error){
         const err= base64.encode("Blog cannot be deleted.  Please try later.")
        res.redirect(`/myblogs?message=${err}`)
    }
   
}

const createBlog = (req, res) => {
    try{
        const {title, body} = req.body;
    const newBlog = new Blogs({title, body, userId: req.session.userId})
    newBlog.save()
    .then(response => {
        res.redirect("/myblogs")
    })
    .catch(err =>{
         res.render("addblog", {
      message:
        "Blog cannot be saved at this moment. Please try later.",
    });
    })

    }catch(err){
        res.render("addblog", {
      message:
        "Cannot create a blog due to server error. Please try later.",
    });
    }
    
}

const updateBlog = (req, res) => {
    try{
        const {blogId} = req.query;
        Blogs.findByIdAndUpdate(blogId, req.body)
       
    .then(response => {
        res.redirect("/myblogs")
    })
    .catch(err =>{
         res.render("editblog", {
      message:
        "Cannot edit a blog. Please try later.",
    });
    })

    }catch(err){
        res.render("editblog", {
      message:
        "Cannot edit a blog due to server error. Please try later.",
    });
    }
    
}


const deleteBlog = (req,res) => {
    try{
        const {blogId} = req.query
    Blogs.findByIdAndDelete({_id: blogId})
    .then( responce => {
         res.redirect("/myblogs")
    })
    .catch(err => {
        const error= base64.encode("Blog cannot be deleted.  Please try later.")
        res.redirect(`/myblogs?message=${error}`)
    })

    }catch(err){
         const error= base64.encode("Blog cannot be deleted.  Please try later.")
        res.redirect(`/myblogs?message=${error}`)
    }
    
}


module.exports = {
    home,
    myBlogs,
    addBlog,
    createBlog,
    deleteBlog,
    editBlog,
    updateBlog
}