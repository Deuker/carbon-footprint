//best way to do this because of markus
// document.querySelector(".waddup").onclick = (e) => {
/*console.log(axios)
  const route = {
    pointA: "",
    pointB: "",
    distance: 0,
    CO2: 0,
    nitrousOxideCO2e: 0,
    methaneCO2e: 0,
    totalDirectCO2e: 0,
    indirectCO2e: 0,
    lifeCycleCO2e: 0,
  }
  const points = document.querySelector("#points").innerHTML.split(" - ")
  console.log(points)
  route.pointA = points[0]
  route.pointB = points[1]
  document.querySelectorAll(".keys").forEach(elem => {
    const string = elem.innerHTML.split(" ")
    const key = string[0].slice(0, string[0].length - 1)
    console.log(key)
    const value = parseFloat(string[1])
    route[key] = value



  })
  console.log(route)*/
axios
  .get("/save-routes")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
