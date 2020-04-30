const mongoose = require("mongoose");
const Airport = require("../models/Airport");
const airports = require("./airports.json");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/database_test", {
  useNewUrlParser: true,
});
airports.forEach(elem=>{
delete elem._id
})
const test = Airport.insertMany(
  airports
)
  .then((results) => {
    console.log("Yaaay");
  })
  .catch((error) => {
    console.log(error, "error");
  });
