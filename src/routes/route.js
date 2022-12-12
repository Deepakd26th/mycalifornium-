const express = require("express");
const router = express.Router();
//const intro = require("./introduction");
//const employee = require("./employee");
//const _ = require("underscore");
const welcome3 = require('../logger/logger')

router.get("/test-me", function (req, res){
  
  //console.log(welcome3.welcome2)
  welcome3.welcome2("deepak")
  res.send("Hey world! Welcome to my cohort,i am Deepak");
})

/*router.get("/test-me", function (req, res) {
  console.log("email from introduction module", intro.myEmail);
  intro.myFunction("Sabiha");
  console.log("email from employee module", employee.myEmail);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let result = _.first(days, 4);
  console.log(`Result from underscore function is ${result}`);

  res.send("any dummy text");
});

router.get("/test-you", function (req, res) {
  console.log("I am here");
  res.send("very important text");
});*/

module.exports = router;
