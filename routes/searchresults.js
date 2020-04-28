const express = require("express");
const router = express.Router();
const axios = require("axios");
const Airport = require("../models/Airport");

// curl - H "Accept: application/json" - u username: password \
const url =
  "https://api.carbonkit.net/3.6/categories/Great_Circle_flight_methodology/calculation?type=great+circle+route";
const username = "VictoriaT";
const password = "1234567890";
const modelName = "Great_Circle_flight_methodology";

// use http basic authentication by passing a second parameter after the url

router.post("/searchresults", (req, res, next) => {
  console.log("working bruh?");

  Airport.find({ municipality: req.body.pointA })
    .then((data) => {
      data = data.filter((el) => el && el.iata_code);
      // console.log(data[0].iata_code);
      const codeA = data[0].iata_code;

      // res.render("userpage/searchresults", { codeA });
      Airport.find({ municipality: req.body.pointB }).then((data) => {
        data = data.filter((el) => el && el.iata_code);
        // console.log(data[0].iata_code);
        const codeB = data[0].iata_code;
        console.log("hello there", codeA);
        console.log("hello there 2", codeB);

        axios
          .get(url, {
            params: {
              "values.IATACode1": codeA,
              "values.IATACode2": codeB,
            },
            auth: {
              username: username,
              password: password,
            },
          })
          .then((response) => {
            const results = response.data.output.amounts;
            console.log("Banana", results);
            res.render("userpage/searchresults", { results });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => console.log("The error while searching occurred: ", err));
});

router.get("/searchresults", (req, res, next) => {
  res.render("userpage/searchresults");
});
// router.get("/example", (req, res) => {
//   res.send("WADDDDDDDUUUUUP");
// });

module.exports = router;
