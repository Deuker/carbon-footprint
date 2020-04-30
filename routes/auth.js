//Here we define the logic for Sign Up and Login

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

//Sign Up Logic

router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  console.log('email of req.body.email at signup', email);
  const password = req.body.password;
  console.log('password of req.body.password at signup', password);

  if (email === "" || password === "") {
    res.render("auth/signup", { message: "Indicate email and password" });
    return;
  }

  User.findOne({ email }).then((user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The email is already taken" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    User.create({
      email,
      password: hashPass,
    })
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

//Login Logic

router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/auth/userpage",
    failureRedirect: "/auth/userpage",
    failureFlash: true,
    passReqToCallback: true,
  })
);

router.get("/userpage", ensureLogin.ensureLoggedIn(), (req, res) => {
  console.log("USER", req.user);
  res.render("userpage/userpage", { user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
