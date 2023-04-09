// Creating 10 variables with different data types
var userName = 'John';
var age = 25;
var height = 1.75;
var isStudent = true;
var city = 'New York';
var programmingLanguages = ['JavaScript', 'Python', 'Java'];
var car = { make: 'Tesla', model: 'Model S', year: 2022 };
var petName = null;
var income;
var jobTitle = 'Web Developer';

// Checking variable data types
// Single-line comment
console.log(typeof userName); // string
console.log(typeof age); // number
console.log(typeof height); // number
console.log(typeof isStudent); // boolean
console.log(typeof city); // string
console.log(typeof programmingLanguages); // object
console.log(typeof car); // object
console.log(typeof petName); // object
console.log(typeof income); // undefined
console.log(typeof jobTitle); // string

// Using assignment operators to perform simple arithmetic operations and output the result using console
// Multi-line comment
/*
Calculate the area of a rectangle with width 10 and height 5
Output the result to the console
*/
let width = 10;
let heightRectangle = 5;
let areaRectangle = width * heightRectangle;
console.log(The area of a rectangle with width ${width} and height ${heightRectangle} is ${areaRectangle});

// Using logical and bitwise operators
// Multi-line comment
/*
If the length of the programmingLanguages array is greater than or equal to 3 and the age is less than or equal to 30,
output "You are a young programmer" to the console. Otherwise, output "Keep coding!" to the console.
*/
if (programmingLanguages.length >= 3 && age <= 30) {
console.log('You are a young programmer');
} else {
console.log('Keep coding!');
}

// Multi-line comment
/*
Perform a bitwise OR operation on the numbers 5 and 1 and output the result to the console.
Perform a right shift operation on the number 5 and output the result to the console.
*/
let num1 = 5;
let num2 = 1;
let bitwiseOr = num1 | num2;
console.log(The result of bitwise OR operation on ${num1} and ${num2} is ${bitwiseOr});
let rightShift = num1 >> 1;
console.log(The result of right shift operation on ${num1} is ${rightShift});