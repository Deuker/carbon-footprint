const axios = require("axios");
const Airport = require("./models/Airport");

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
      "values.IATACode1": "TXL",
      "values.IATACode2": "BCN",
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
