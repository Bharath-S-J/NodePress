const bcrypt = require("bcrypt");
const base64 = require("base-64");
const Users = require("../models/users");
const { request } = require("express");

const signup = (req, res) => {
  res.render("signup", { message: null });
};

const loginPage = (req, res) => {
  res.render("login", { message: null });
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.render("signup", {
        message: "User already Present in DB. Please try login",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({ name, email, password: hashPassword });
    newUser
      .save()
      .then((response) => {
        res.render("login", { message: "User created sucessfully" });
      })
      .catch((err) => {
        res.render("signup", {
          message: "User cannot be created. Please try anagin later",
        });
      });
  } catch {
    res.render("signup", {
      message:
        "User cannot be created. Due to server issue. Please contact support.",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      return res.render("login", {
        message: "User not registeres with us. Please signup first.",
      });
    }
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (passwordMatch) {
        req.session.userId=existingUser._id
      return res.redirect("/");
    } else {
      return res.render("login", { message: "Invalid Password" });
    }
  } catch {
    res.render("login", {
      message:
        "User cannot login. Due to server issue. Please contact support.",
    });
  }
};

const allUsers = (req,res) => {
    Users.find()
    .then(responce => {
        res.json(responce)
    })
    .catch(err => {
        res.json(err)
    })
}

const logout = (req,res)=>{
    req.session.destroy(()=>{
      return  res.redirect('/login')
    })
}

module.exports = {
  signup,
  loginPage,
  register,
  login,
  allUsers,
  logout
};
