const mongoose = require("mongoose");
const Airport = require("../models/Airport");

mongoose.connect("mongodb://localhost/project-carbon-footprint", {
  useNewUrlParser: true,
});

// const test = Airport.findOne({ municipality: "Barcelona" })
//   .then((airport) => {
//     console.log(airport);
//   })
//   .catch((error) => {
//     console.log(error, "error");
//   });
