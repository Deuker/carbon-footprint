const express = require("express");
const router = express.Router();

const Airport = require("../models/Airport");
// const ensureLogin = require("connect-ensure-login");

// router.get("/userpage", ensureLogin.ensureLoggedIn(), (req, res) => {
//   res.render("userpage/userpage", { user: req.user });
// });
router.get("/userpage", (req, res, next) => {
  res.render("userpage/userpage");
});

router.get("/searchresults", (req, res, next) => {
  res.render("userpage/searchresults");
});

router.post("/userpage", (req, res) => {
  console.log(req.body);
  Airport.find({ municipality: req.body.pointA })
    .then((data) => {
      data = data.filter((el) => el && el.iata_code);
      console.log(data[0].iata_code);
      console.log(data);
      res.render("userpage/searchresults");
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
  Airport.find({ municipality: req.body.pointB })
    .then((data) => {
      data = data.filter((el) => el && el.iata_code);
      console.log(data[0].iata_code);
      console.log(data);
      res.render("userpage/searchresults");
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

module.exports = router;

