//Data types detective js file that includes challenges


// TASK 1: Identify the data types 
let age = 17;
let height = 5.9;
let name = "Alex";
let isStudent = true;
let favoriteNumber = "7";  // â† look closely!
let grade = 95.5;
//Your answers: 

// Question 1: Why does favoriteNumber say "string" even though it looks like a number?
// Your answer: Because a number can be a string.

// Question 2: Write one more variable below called "grade" with the value 95.5
// Then log its value + its type (copy the style above)
// Your code here:
console.log(grade, typeof grade);



// TASK 2: Mixing text and variables 
console.log("\n--- Task 2 ---");

// Old way (concatenation)
console.log("I am " + age + " years old and " + height + " feet tall.");

// Modern way (template literal â€“ uses backticks ` `)
console.log(`I am ${age} years old and ${height} feet tall.`);

// Question 3: Which style do you like better? Why? (write as comment)
// Your answer: I like template literals because it's easier to read and takes up less screen space.

// Task 2a: Fix this broken line so it prints correctly (remove the error)

// console.log("My name is " name " and I like coding.");
// Your fixed version:
console.log("My name is " + name + " and I like coding.");



// TASK 3: The Salary Trap â€“ Why commas & $ break numbers
console.log("\n--- Task 3 ---");

let salary = 87000;           // correct number
// let wrongSalary = $87000;  // â† this would crash! (uncomment to see)

console.log("Salary as number:", salary);
console.log("Salary with commas:", salary.toLocaleString("en-US"));

// Question 4: What happens if you write: let salary = 87,000;  ?
// Try it below (uncomment one at a time), then explain why in a comment
// let test1 = 87,000;
// console.log("test1:", test1);
// Your explanation: We get a syntax error with an unexpected number, because in JS
//  commas act as syntactic operators, which can chain or separate different expressions together.



// Bonus: Try these â€” what gets printed and why?
let test2 = 1_000_000;   // modern underscore separator â€“ does it work? IT DOES WORK!
console.log("test2:", test2);



// TASK 4: Booleans & Truthy/Falsy 
console.log("\n--- Task 4 ---");
//Boolean - Either true or false.
//let online = true;
//let student = true;

let hasHomework = true;
let isEmpty = "";
let hasZero = 0;
let hasSpace = " ";
let online = true;
let student = true;

console.log("hasHomework is:", hasHomework, "â†’ Boolean(hasHomework):", Boolean(hasHomework));
console.log("empty string â†’", Boolean(isEmpty));
console.log("zero â†’", Boolean(hasZero));
console.log("space character â†’", Boolean(hasSpace));
console.log('You are online: ' + online + '.');
console.log('Is this student enrolled? ' + student + '.');  

// Question 5: In a form, why might we check Boolean(nameField.value) to see if someone typed something?
// Your answer: Because we can determine if the field has been filled out or not. true or false.

// Question 6 (final): Create your own!
// Make 3 variables (one number, one string, one boolean) about yourself
// Then use a template literal to print a sentence like:
// "My name is ___ and I am ___ years old. I like coding: ___"
// Your code here:
age = 23;
name = "Kris";
let likesCoding = true;

console.log(`My name is ${name} and I am ${age}. I like coding: ${likesCoding ? "in C++" : "I don't do nerd stuff"}.`);