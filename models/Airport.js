const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema({
  name: String,
  lastName: String,
  nationality: String,
  birthday: Date,
  pictureUrl: String
});
 
const Airport = mongoose.model("Airport", authorSchema);
 
module.exports = Airport;