// Declare a variable using let
let score: number = 50;
console.log("Outside block score:", score);

// Block scope demonstration
if (true) {
  let score: number = 100;
  console.log("Inside block score:", score);
}

// Declare a constant
const COUNTRY: string = "India";
console.log("Country:", COUNTRY); 