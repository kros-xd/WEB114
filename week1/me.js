// Kris Lee - 6/13/2026

/*
Step 2 -- 7 Variables I will use to describe myself:
    - 1.) const variable: NAME
        - Data type: string
        - Explanation: My NAME is a sequence of characters, which is stored
            in a constant variable, because I don't plan on changing my name.
    
    - 2.) variable: favoriteColor
        - Data type: string
        - Explanation: Also a sequence of characters and I considered making this
            a constant variable as well, but my favorite color changes often so I
            decided not to.

    - 3.) variable: favoriteFood
        - Data type: string
        - Explanation: 

    - 4.) variable: favoriteAnimal
        - Data type: string
        - Explanation: Another string, so far I'm keeping all my favorite categories
            with a similar naming convention so it is consistent.

    - 5.) variable: favoriteSeason
        - Data type: string
        - Explanation: I think my favorite season is Fall, but I also like Spring.
            This also needs to be a string.

    - 6.) variable: myAge
        - Data type: number
        - Explanation: This uses an number (integer) data type. It shouldn't be a constant
            because it is prone to changing every year.

    - 7.) variable: isStudent
        - Data type: boolean
        - Explanation: This is a logical primitive data type. 'isStudent' is a boolean, 
            because we only need to know if I'm a student or not (true || false).
*/

// Step 3 -- Declare variables about myself:
const NAME = "Kris";
let favoriteColor = "Black Forest Green";
let favoriteFood = "Korean BBQ";
let favoriteAnimal = "Cats";
let favoriteSeason = "Fall";
let myAge = 23;
let isStudent = true;

// Step 4 -- Data type check:
/*
    Q: Which variable could easily have the wrong data type? 
        What mistake might someone make with it?
    
    A: I think the variable 'myAge' is most likely to have the wrong data type.
        Someone might use a string for their age, which could be harder to increment
        or use calculations later in their program.
*/

// Step 5 -- Display facts using template literals
console.log(`\nHi there! My name is ${NAME} and I'm ${myAge} years old.`);
console.log(`I am ${isStudent ? "a student at JCCC" : "not a student anywhere"}.`);
console.log(`Some facts about me: my favorite color is a ${favoriteColor}, `);
console.log(`I really like ${favoriteFood}, my favorite animal are ${favoriteAnimal};`);
console.log(`in fact, I have two! Lastly, my favorite season is ${favoriteSeason}.\n`);

//Step 6 -- Questions
/*
    1. Which data type was easiest to choose? Why?
        a: I think any of the string types, because I was writing names of things
            it was very clear that it required strings.
    2. Which variable was hardest to decide a data type for?
        a: I didn't necessarily have a hard time with any of the data types,
            but I had a thought about using a string for myAge to store the value
            "23 years old", but I realized, what if I needed my age to calculate
            values later? It then became an int.
    3. What happens if a number is stored as a string in JavaScript?
        a: JavaScript is a dynamically typed language and variables are not bound
            to a single data type, so if the number changes to a string later during
            runtime, it will just convert to a string.
    4. Why is it helpful to plan data types before coding?
        a: it's helpful to plan data types ahead of time because then
            you can determine how this data is used, do we even need to store
            specific values or can we just return its calculated value without 
            the need to store it. It's also helpful to keep track of what you're
            working with and making sure the names and types are consistent.
*/