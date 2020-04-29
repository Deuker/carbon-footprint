const express = require("express");
const router = express.Router();


// const ensureLogin = require("connect-ensure-login");
// do we need this line of code?

router.get("/searchresults", (req, res, next) => {
  res.render("userpage/searchresults");
});





module.exports = router;
