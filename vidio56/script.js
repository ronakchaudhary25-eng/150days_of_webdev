console.log("Hello am learning conditional statements in JavaScript!");

let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else if(age<0){
    console.log("Are u kidding !!!!");
}
else{
    console.log("You are not eligible to vote.");
}

//  arithmatic operators in js : +, -, *, /, %,++,--,**
// assinment operators in js : =, +=, -=, *=, /=, %=, **=


console.log((3=="3"));
//  here === operators will also check type of the variable and == operator will only check the value of the variable compared to the other variable.
console.log((3==="3"));

// ternary operator 
let a = 10;
let b = 20;
let c = (a>b)? (console.log("a is greater than b")) : (console.log("b is greater than a"));