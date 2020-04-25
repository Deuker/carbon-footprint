// 25.04.2020 add basic User Model with E-Mail and password - not connected to database

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  email: String,
  password: String
  // adding first Name & last Name?
  // adding Route Array of Objects
});

const User = mongoose.model("User", userSchema);
module.exports = User;