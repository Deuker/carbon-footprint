const express = require("express");
const router = express.Router();

const Airport = require("../models/Airport");

router.post("/searchresults", (req, res, next) => {
  console.log("working bruh?");

  console.log(req.body);
  Airport.find({ municipality: req.body.pointA })
    .then((data) => {
      data = data.filter((el) => el && el.iata_code);
      console.log(data[0].iata_code);
      console.log(data);
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
