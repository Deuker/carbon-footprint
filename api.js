const axios = require("axios");

// curl - H "Accept: application/json" - u username: password \
const url =
  "https://api.carbonkit.net/3.6/categories/Great_Circle_flight_methodology/calculation?type=great+circle+route";
const username = "VictoriaT";
const password = "1234567890";
const modelName = "Great_Circle_flight_methodology";

// use http basic authentication by passing a second parameter after the url
axios
  .get(url, {
    params: {
      "values.IATACode1": "BCN",
      "values.IATACode2": "SXF",
    },
    auth: {
      username: username,
      password: password,
    },
  })
  .then((response) => {
    console.log(response.data.output.amounts);
  })
  .catch((err) => {
    console.log(err);
  });

// let testCall = db.getCollection("airportsIATA");
// testCall.db.collection.find({ municipality: "Barcelona" }).then((response) => {
//   console.log(response);
// });
