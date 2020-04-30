const express = require("express");
const router = express.Router();

router.get("/bike", (req, res) => {
  res.render("./bike/addroute" , { message: "The email is already taken" });
  console.log(res.render);
});

module.exports = router;




// CODE DOWNLOADED FOR DISTAMCE CONTROL BIKE
// var rad = function(x) {
//   return x * Math.PI / 180;
// };


// var getDistance = function(p1, p2) {
//   var R = 6378137; // Earth’s mean radius in meter
//   var dLat = rad(p2.lat() - p1.lat());
//   var dLong = rad(p2.lng() - p1.lng());
//   var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
//     Math.sin(dLong / 2) * Math.sin(dLong / 2);
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// 	var d = R * c;
//   return d; // returns the distance in meter
// };

// console.log(d);


//add saving for bike or transport


//add bike tour
//measure distance via two points in google maps
//times avg co2 by car outside city & inside city (total avg)
//savings in co2
//add to score

//display saved amount by bike