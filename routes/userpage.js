const express = require("express");
const router = express.Router();

const Airport = require("../models/Airport");
// const ensureLogin = require("connect-ensure-login");

router.get("/searchresults", (req, res, next) => {
  res.render("userpage/searchresults");
});

module.exports = router;
