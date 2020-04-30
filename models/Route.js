const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const routeSchema = new Schema({
  pointA: String,
  pointB: String,
  distance: Number,
  CO2: Number,
  nitrousOxideCO2e: Number,
  methaneCO2e: Number,
  totalDirectCO2e: Number,
  indirectCO2e: Number,
  lifeCycleCO2e: Number,
});

const Route = mongoose.model("Route", routeSchema);
module.exports = Route;
