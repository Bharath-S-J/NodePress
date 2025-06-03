const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");
const session =  require('express-session');
const { checkAuth } = require("./utils/auth");

require('dotenv').config()

const app = express();

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then((res) => {
    console.log("Connected to mongo");
  })
  .catch((err) => {
    console.log(" Error Connected to mongo");
  });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

app.set("view engine", "ejs");

app.use(checkAuth)
app.use(router)


app.listen(3000, () => {
  console.log("Listening to port 3000");
});
