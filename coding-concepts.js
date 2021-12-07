// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021";
// console.log(cohort.length);

// a) Your answer: 9
// b) Verify and explain: the .length built-in method will output the number of characters in the string

// --------------------2) What will this log?

var greeting = "Hello World!";
// console.log(greeting[3]);

// a) Your answer: l
// b) Verify and explain: the index of [3] is the fourth character of the string because computers start counting at 0.  [0] -> "H", [1] -> "e", [2] -> l, [3] -> l

// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"];
var index = 1;
// console.log(languages[index]);

// a) Your answer: Ruby
// b) Verify and explain: the variable index is set to 1 and Ruby is in the index position of 1

// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"];
// console.log(weekendDays.toUpperCase());

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: weekendDays is actually an array an not a list so .toUpperCase() will not work since it is a string function

// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"];
console.log(typeof dataTypes.length);

// a) Your answer: number
// b) Verify and explain: dataTypes.length is equal to 3 and 3 is a number data type
