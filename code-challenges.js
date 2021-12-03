/////////////////////////
// I wanted to challenge myself by wrapping everything in a function, I know we haven't learned about it yet so I've included the way I approached solving the problems without funcitons at the end -Kirk
/////////////////////////

// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const boilingPoint = (temperature) => {
  if (temperature > 212) {
    return `${temperature} is above boiling point`;
  } else if (temperature < 212) {
    return `${temperature} is below boiling point`;
  } else {
    return `${temperature} is at boiling point`;
  }
};

// var temp = 42;
// var temp = 350;
var temp = 212;
console.log(boilingPoint(temp));

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const lengthOfCombinedArrays = (array1, array2) => {
  var arraysCombined = array1.concat(array2);
  return arraysCombined.length;
};

var myNumbers1 = [3, 7, 0, 36, -9];
var myNumbers2 = [8, -7, 42, 9, 13];
console.log(lengthOfCombinedArrays(myNumbers1, myNumbers2));

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

const reverseString = (string) => {
  return currentCohort.split("").reverse().join("");
};

var currentCohort = "Echo 2021";
console.log(reverseString(currentCohort));

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const oddOrEvenNumbersInArray = (array) => {
  if (array % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

const loopThroughArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(oddOrEvenNumbersInArray(array[i]));
  }
};

var myArray = [13, 34, 5, 10, 27, 42];
loopThroughArray(myArray); // I couldn't figure out how to make it work with wrapping a console.log around the call so I put it inside the loopThroughArray function, I realize this may be a little impractical...

// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

// var number1 = 58;
// var number2 = 100;

const subtarctSmallerNumFromBiggerNum = (number1, number2) => {
  if (number1 > number2) {
    return number1 - number2;
  } else if (number2 > number1) {
    return number2 - number1;
  } else {
    return "Your numbers are equal!";
  }
};

var number1 = 27;
var number2 = 24;
console.log(subtarctSmallerNumFromBiggerNum(number1, number2));

/////////////////////////
// Just in case I messed something up, here's my original answers that don't use functions -Kirk
/////////////////////////

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp = 42;
// var temp = 350;
var temp = 212;

if (temp > 212) {
  console.log(`${temp} is above boiling point`);
} else if (temp < 212) {
  console.log(`${temp} is below boiling point`);
} else {
  console.log(`${temp} is at boiling point`);
}

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9];
var myNumbers2 = [8, -7, 42, 9, 13];
var myNumbersCombined = myNumbers1.concat(myNumbers2);
console.log(myNumbersCombined.length);

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

var currentCohort = "Echo 2021";
console.log(currentCohort.split("").reverse().join(""));

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

var myArray = [13, 34, 5, 10, 27, 42];
for (let i = 0; i < myArray.length; i++)
  if (myArray[i] % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }

// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

// var number1 = 58;
// var number2 = 100;

var number1 = 27;
var number2 = 24;

if (number1 > number2) {
  console.log(number1 - number2);
} else if (number2 > number1) {
  console.log(number2 - number1);
} else {
  console.log("Your numbers are equal!");
}
