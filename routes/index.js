const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// const loginCheck = () => {
//   return (req, res, next) => {
//     if (req.session.user) {
//       next();
//     } else {
//       res.redirect("/login");
//     }
//   };
// };

// router.get("/userpage", loginCheck(), (req, res) => {
//   res.render("/userpage/userpage");
// });

module.exports = router;
