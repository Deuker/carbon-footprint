// added 24.04. to test the login and signup 

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const bcryptSalt = 10; 

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

// add router.post from form here

router.post('/signup', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log('Email is: ', email);
  console.log('Password is: ', password);
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
  //console.log(hashPass);

  User.create({
    email,
    password: hashPass
  })
  .then(() => {
    res.redirect('/');
  })
  .catch(error => {
    console.log(error);
  })
});

/*
router.post("/signup", (req, res, next) => {
  const email    = req.body.email;
  const password = req.body.password;
  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(email, salt);
 
  User.create({
    email,
    password: hashPass
  })
  .then(() => {
    res.redirect("/");
  })
  .catch(error => {
    console.log(error);
  })
});
*/

router.get('/login', (req, res) => {
  res.render('auth/login');
});

module.exports = router;