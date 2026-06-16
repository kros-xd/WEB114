"use strict";

//Change the alert, confirm, and prompt code below to learn what they do. 


// 1. Wake up the mirror
alert("Mirror, mirror on the wall... I am here!");

// 2. Ask the student's name
let yourName = prompt("Who dares speak to the Magic Mirror?", "Type your name");

// 3. Tell them something nice
alert("Greetings, " + yourName + "! The mirror sees great things in your future...");

// 4. Ask if they want a compliment (we ignore the answer for now)
confirm("Would you like the mirror to give you a compliment?");

// 5. Give the compliment anyway
alert("You are brave for even talking to a magic mirror today!");

// 6. Ask one more fun question
let favoriteColor = prompt("What is your favorite color?");

// 7. Mirror repeats it back in a magical way
alert("Ahhh... " + favoriteColor + " ... the color of mystery and power!");

// ────────────────────────────────────────────────
// NEW: Simple confirm example – show what they clicked!
// No if-statements needed – just save and display the result
let saidYes = confirm("Do you want candy?");

if (saidYes) {
alert("You were given a piece of candy.");
} else alert("The mirror puts away the bag of candy.");

// 8. Say goodbye
alert("The mirror grows quiet... until we meet again, " + yourName);

console.log("Magic Mirror session complete!");