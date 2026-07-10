alert("Hello, World!");
console.log("Code is running...");
console.log("This is a test message...");
console.log("Another log message...");

var a = prompt("Enter your name:");
console.log("User entered name: " + a);
var isTrue = confirm("Are you sure you want to proceed?");
if (isTrue) {
    console.log("User confirmed to proceed.");
} else {
    console.log("User canceled the action.");
}