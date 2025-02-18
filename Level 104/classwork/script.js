// Level 104:
// JavaScript Array Methods Task: Join, Slice, Splice

// Objective: To practice using the join, slice, and splice array methods.

// Instructions:

// Create an array called fruits with the following elements:

// Use the slice method to create a new array citrus that contains the second and third elements of fruits.

// Use the splice method to replace the last two elements of fruits with the string 'fig'.

// Use the join method to create a string fruitString from the fruits array, with elements separated by a dash -.

// Challenge:

//  - Write a function called processFruits that takes an array of fruits as input, performs the above steps on it, and returns the resulting string.


let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

let citrus = fruits.slice(1, 3);

fruits.splice(3, 2, "fig");

let fruitString = fruits.join("-");

function processFruits(fruits) {

    let citrus = fruits.slice(1, 3);

    fruits.splice(3, 2, "fig");

    let fruitString = fruits.join("-");

    return fruitString;
}

