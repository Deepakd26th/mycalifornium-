const express = require("express");
const { size } = require("lodash");
const router = express.Router();
//const intro = require("./introduction");
//const employee = require("./employee");
//const _ = require("underscore");
const logg = require('../logger/logger');
const utill = require('../util/helper');
//const BatchInfo2 = require('../util/helper');
const validate = require('../validator/formatter');
//const result8 = require('../validator/formatter');
//const result9 = require('../validator/formatter');

/*router.get("/test-me", function (req, res){
  
  //console.log(welcome3.welcome2)
  logg.welcome2("deepak")

  res.send("Hey world! Welcome to my cohort,i am Deepak");
})*/

/*router.get("/test-me", function (req, res){

  utill.BatchInfo1("Californium, Week-W4D5 ,Day-Monday ,And The topic for today is Nodejs module system")

res.send("Hey world! Welcome to my cohort,i am Deepak,its sencond problem i have solved");

})
*/
/*router.get("/test-me", function (req, res){

utill.currentDate()

  res.send("Hey world! today is MONDAY");

})
*/
/*
router.get("/test-me", function (req, res){

  validate.text1("Trim");
  res.send("Hey world! today is Trim day");

})

router.get("/test-me", function (req, res){

  validate.lowerCase("lowercase")
  res.send("Hey world! Today is lower day");

})

router.get("/test-me", function (req, res){

  validate.upperCase("uppercase")
  res.send("Hey world! Today is upper day");


})
*/
// router.get("/test-me", function (req, res){
 
//    const chunk = (arr,size)=> 
//    Array.from({length:Math.ceil(arr.length/size)},(v,i)=>
//    arr.slice(i*size,i*size+size)
//    );
//  console.log(chunk(["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"],4))

// })

// router.get("/test-me", function (req, res){

//   const _ = require('lodash');
// let x = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  
// let newArray = _.tail(x);
  
// console.log(newArray);
// });




  const _ = require('lodash');
  router.get("/test-me", function (req, res){

    let Pairs =[["horror","The Shining"],
    ["drama", "Titanic"],
    ["thriller","Shutter Island"],
    ["fantasy","Pans Labyrinth"]]

 console.log(_.fromPairs(Pairs))

  });
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
