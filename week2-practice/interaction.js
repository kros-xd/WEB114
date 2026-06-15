// Kris Lee - 6/15/2026
let getName = prompt("What's your name? ", ""); // prompt users to get an input.

let isCorrectName = confirm(`your name is ${getName}?`); // confirmation message, which ok/confirm = true || false
alert(isCorrectName);

// Data type conversions

let value = true;

alert(typeof value);
// string conversion
value = String(value);
alert(typeof value);

let age = "3" * "7" + 2; // automatically converts to a number from a string.
alert(typeof age);
// Numeric conversion
age = "Arbitrary String";
alert(Number(age)); // returns NaN