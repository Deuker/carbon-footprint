const express = require("express");
const router = express.Router();

// const ensureLogin = require("connect-ensure-login");
// do we need this line of code?
/*
router.get("/searchresults", (req, res, next) => {
  res.render("userpage/searchresults");
});
*/


//Create Routes
router.post('/searchresults', (req, res, next) => {
  const { pointA, pointB } = req.body;
  const newRoute = new Route ({ pointA, pointB });
  newRoute.save()
  .then((route) => {
    res.redirect('userpage/searchresults');
  })
  .catch((error) => {
    console.log(error);
  })
});


module.exports = router;
