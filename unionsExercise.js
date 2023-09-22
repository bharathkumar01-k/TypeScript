"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
const stuff = ["bharath", "kumar", "jeeva"];
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
let skillLevel;
// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors = [
    {
        r: 233,
        g: 67,
        b: 45,
    },
    {
        h: 78,
        s: 54,
        l: 98,
    },
];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = (name) => {
    if (typeof name === "string") {
        console.log(`Hello ${name}`);
    }
    else {
        name.forEach((singleName) => {
            console.log(`Hello ${singleName}`);
        });
    }
};
console.log(greet("bharath"));
console.log();
console.log(greet(["bharath", "kumar", "hdf", "kh"]));
