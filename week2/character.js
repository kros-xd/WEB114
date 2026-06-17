// Kris Lee 6/16/2026
"use strict";

// introduction message
alert("Welcome traveller... to Aerova, the floating sky city! I am Kris, your guide and I will help you create your hero.");
const charName = prompt("What is your name, traveller?", "Traveller") || "Wanderer";
let hasPets = confirm("Do you have any pets?");

if (hasPets) {
    const petType = prompt(`What kind of pet do you have ${charName}? (e.g. Cat, Wolf, Dragon, etc.)`, "companion") || "Cat";
    const petName = prompt(`Excellent, ${charName}. What is your ${petType}'s name?`, "pet name") || "Meat";
} else {
    alert("Ah, I see you're a loner.");
}

let hasPowers = confirm(`Do you have any powers, ${charName}? Like magic, super strength, or extreme luck?`);

if (hasPowers) {
    const superPower = prompt(`What is your super power, ${charName}?`, "Blood Manipulation") || "Super Unlucky";
    const trainingYearsText = prompt(`How many years have you been training your skill, ${superPower}?`, 0) || 0;
    const trainingYears = parseInt(trainingYearsText);
    console.log(trainingYearsText, typeof trainingYearsText);
    console.log(trainingYears, typeof trainingYears);
    const powerLevel = trainingYears * 10;
} else {
    alert("So you're... useless?");
}

const likesFighting = confirm(`Well... ${charName}, do you like fighting monsters? Click OK for YES, CANCEL for NO.`);
console.log(likesFighting, typeof likesFighting);

alert(`Gathering magic for ${charName}... almost ready!`);
alert(`
    ================================================
    Name: ${charName}
    Pet: ${hasPets ? `${petName}` : "No pets"}
    Superpower: ${superPower}
    Power Level: ${powerLevel}
    Monster Fighter: ${likesFighting ? "Yes" : "No"}
    ================================================
    Aerova has been succumbed by darkness, but ${charName} arose! Their potential to vanquish darkness ${hasPets ? `with their companion, ${petName} at their side.` : "through pure determination."}
    ${hasPowers ? `With ${superPower}` : "without any powers"}, you will save us from the evil that engulfed Aerova...
    `)