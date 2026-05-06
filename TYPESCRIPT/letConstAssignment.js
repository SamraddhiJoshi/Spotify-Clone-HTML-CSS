"use strict";
// Declare a variable using let
let score = 50;
console.log("Outside block score:", score);
// Block scope demonstration
if (true) {
    let score = 100;
    console.log("Inside block score:", score);
}
// Declare a constant
const COUNTRY = "India";
console.log("Country:", COUNTRY);
