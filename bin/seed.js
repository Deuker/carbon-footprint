const mongoose = require("mongoose");
const Airport = require("../models/Airport");

mongoose.connect("mongodb://localhost/project-carbon-footprint", {
  useNewUrlParser: true,
});

const test = Airport.create({
  ident: "Hello",
  type: "I",
  name: "Am",
  elevation_ft: "THE",
  continent: "TEST",
  iso_country: "AIRPORT",
  iso_region: "PLS",
  municipality: "DELETE",
  gps_code: "ME",
  iata_code: "A",
  local_code: "S",
  coordinates: "AP",
})
  .then((results) => {
    console.log("Yaaay");
  })
  .catch((error) => {
    console.log(error, "error");
  });
