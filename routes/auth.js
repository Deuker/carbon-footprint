// added 24.04. to test the login and signup 

const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

// add router.post from form here

router.get('/login', (req, res) => {
  res.render('auth/login');
});

module.exports = router;