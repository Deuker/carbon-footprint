const mongoose = require("mongoose");
const Airport = require("../models/Airport");

mongoose.connect("mongodb://localhost/project-carbon-footprint", {
  useNewUrlParser: true,
});

// const test = Airport.deleteMany({
//   type: "small_airport",
//   type: "closed",
//   type: "heliport",
//   type: "medium_airport",
//   type: "seaplane_base",
// })
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.log(error, "error");
//   });

