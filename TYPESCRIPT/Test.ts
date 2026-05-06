// This prints the favorite fruit
let fruit: string = "Mangoes";
console.log(fruit);

/* this is a function which calculates the double of a number */
function doubleNumber(num : number) : void{
  console.log("double of " + num + " is " + (num*2));
}
//calling the function
doubleNumber(5);

class Person{
  sayHello() : void{
    console.log("Hello, I am Samraddhi Joshi");
  }
}
let obj = new Person();
obj.sayHello();


