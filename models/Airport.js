const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airportSchema = new Schema({
  ident: String,
  type: String,
  name: String,
  elevation_ft: String,
  continent: String,
  iso_country: String,
  iso_region: String,
  municipality: String,
  gps_code: String,
  iata_code: String,
  local_code: String,
  coordinates: String,
});

const Airport = mongoose.model("Airport", airportSchema);

module.exports = Airport;
