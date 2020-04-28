const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const routeSchema = new Schema({
  pointA: String,
  pointB: String,
  distance: Number,
  transportType: String,
  date: Date,
  co2: Number,
  indirectCo2e: Number,
  lifecycleCo2: Number,
  methaneCo2: Number,
  nitrousoxideCo2: Number,
  totaldirectCo2: Number,
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;