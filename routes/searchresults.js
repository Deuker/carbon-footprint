const express = require("express");
const router = express.Router();
const axios = require("axios");
const Airport = require("../models/Airport");
const Route = require("../models/Route");
const User = require("../models/User");

// curl - H "Accept: application/json" - u username: password \
const url =
  "https://api.carbonkit.net/3.6/categories/Great_Circle_flight_methodology/calculation?type=great+circle+route";
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const modelName = "Great_Circle_flight_methodology";

// use http basic authentication by passing a second parameter after the url

router.post("/searchresults", (req, res, next) => {
  const departure = req.body.pointA;
  const destination = req.body.pointB;

  Airport.find({ municipality: departure })
    .then((data) => {
      data = data.filter((el) => el && el.iata_code);
      console.log(data[0].iata_code);
      const codeA = data[0].iata_code;

      // res.render("userpage/searchresults", { codeA });
      Airport.find({ municipality: destination }).then((data) => {
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
            res.render("userpage/searchresults", {
              results,
              departure,
              destination,
            });
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

//Here you create the saved route in the backend!
router.post("/saved-routes", (req, res, next) => {
  const savedRoute = new Route(req.body);
  savedRoute
    .save()
    .then((result) => {
      console.log(result);
      User.findById(req.user._id).then((user) => {
        user.routes.push(result);
        user.save().then((newuser) => {
          console.log("New user", newuser);
          // res.redirect("userpage/saved-routes");
        });
      });
    })
    .catch((err) => console.log("The error while searching occurred: ", err));
  console.log("this is the body of the post:", req.body);
  // res.render("userpage/saved-routes");
});

//Here you show the user saved routes
router.get("/saved-routes", (req, res) => {
  console.log("HELLO", req.user);
  User.findById(req.user._id).then((user) => {
    console.log("Hello user", user);
    const allRoutesPromise = user.routes.map((ele) => {
      return Promise.resolve(Route.findById(ele));
    });
    Promise.all(allRoutesPromise).then((result) => {
      console.log(result);
      res.render("userpage/saved-routes", { result });
    });
  });
});

module.exports = router;
