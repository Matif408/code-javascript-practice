"use strict";
// Even or Odd

/*
const isEvenOdd = function (number) {
  return number % 2 === 0 ? "Number is even" : "Number is odd";
};

console.log(isEvenOdd(8));
*/

//Write a function that accepts two parameters (sum and multiply) and find two numbers [x, y], where x + y = sum and x * y = multiply.

/*
let sum = 0;

let multiply = 0;
const twoNumber = [];
const valueSumAndMultiply = function (number1, number2) {
  sum = number1 + number2;
  multiply = number1 * number2;
  twoNumber.push(number1, number2);
  twoNumber.sort();
};
valueSumAndMultiply(8, 6);
console.log(sum, multiply, twoNumber);
*/

// factorial of number
/*
let factorialOfNumber = 5;
let fact = 1;
for (let counter = 1; counter <= factorialOfNumber; counter++) {
  fact = counter * fact;
}
console.log(fact);
*/

//You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20
/*
let sum = 0;

const sumOfNumber = function (array) {
  for (let arrayOfIndex = 0; arrayOfIndex < array.length; arrayOfIndex++) {
    if (Math.sign(array[arrayOfIndex]) !== -1) {
      sum = array[arrayOfIndex] + sum;
    } else if (array[arrayOfIndex === -1]) {
      return sum;
    }
  }
  return sum;
};
console.log(sumOfNumber([1, 789, 2]));
*/

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
/*
const makeNegative = function (number) {
  return -Math.abs(number);
};
console.log(makeNegative(-7));
*/
// Complete the solution so that it reverses the string passed into it.

/*
const reverseString = function (word) {
  return word.split("").reverse("").join("");
};
console.log(reverseString("hello"));
*/
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
/*
const areaOfTriangle = function (s1, s2, s3) {
  let semiParametar = (s1 + s2 + s3) / 2;

  return Math.sqrt(
    semiParametar *
      (semiParametar - s1) *
      (semiParametar - s2) *
      (semiParametar - s3)
  );
};
console.log(areaOfTriangle(5, 6, 7));
*/
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

/*
let year = 2000;
if (year % 4 === 0) {
  console.log("it is a leap year");
} else {
  console.log("it is not a leap year");
}
*/

// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

/*
let secretNumber = Math.trunc(Number(Math.random() * 10 + 1));
let userGuess = Number(prompt("Guess the number between 1 to 10"));
console.log(secretNumber);

const displayMessage = userGuess === secretNumber ? "Good work" : "Not Matched";
console.log(displayMessage);
*/

// Write a JavaScript program to calculate multiplication  of two numbers (input from the user).
/*
let userInput1 = Number(prompt("Enter the first Number"));
let userInput2 = Number(prompt("Enter the second Number"));
let multiplication = userInput1 * userInput2;
console.log(`The result is ${multiplication}`);
*/

// function calcAge(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this.birthYear);
// }
// calcAge(1996);

const Arrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
Arrow(1996);
