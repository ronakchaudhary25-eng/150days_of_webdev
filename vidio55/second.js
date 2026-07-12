console.log("hey this will be shown in console when you run the second.js file");

var a = 10;
a += 1;
var b = 20;
var c = "Ronak!!!";
console.log("The sum of a and b is: " + (a + b));
console.log(typeof a , typeof b , typeof c); // type of each variable will be shown in console

//  constant variable ka value we cannot change after initialization

// const pi = 3.14;
// pi += 1; // this will give error because we cannot change the value of constant variable
//   this will give error because we cannot change the value of constant variable

// let variable ka value we can change after initialization 
//  let variable ka scope block level hota hai, iska matlab ye hai ki let variable sirf us block ke andar hi accessible hota hai jahan pe usko declare kiya gaya hai so the updation will be within that block only

//  if we use var then then it's updation inside the block will be reflected outside the block as well because var variable ka scope function level hota hai, iska matlab ye hai ki var variable sirf us function ke andar hi accessible hota hai jahan pe usko declare kiya gaya hai so the updation will be reflected outside the block as well

// best is to use let
{
    let a = 20; // this a is different from the a declared outside the block
    console.log(a); // this will print 20 because this a is different from the a declared outside the block
}
console.log(a);

// data types in js : 
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Object
// 7. Symbol
//  type of null is object but it is not an object, it is a primitive data type. It is a special value that represents the absence of any value or object. It is used to indicate that a variable has no value or that an object property does not exist.

// objects in js : key -value pairs, where key is a string and value can be any data type. Objects are used to store data in a structured way. We can access the values of an object using dot notation or bracket notation.

//  intializong an object in js
let o = {
    name: "Ronak",
    age: 18,
    isStudent: true,
    address: {
        city: "Ahmedabad",
        state: "Gujarat"
    },
    "is_handsome": true
}

console.log(o); // this will print the whole object
console.log(o.name); // this will print Ronak
console.log(o["age"]); // this will print 18

o.salary = 3200000; // this will add a new key-value pair to the object
console.log(o); // this will print the updated object
