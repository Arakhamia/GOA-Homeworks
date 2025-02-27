// Display and Manipulate Date and Time
// Objectives:

// Create and display a Date object for the current date and time.

// Display the current date and time in a readable format on a webpage.

// Use set methods to modify the Date object.

// Update and display the modified date and time.

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let milliseconds = date.getMilliseconds();

console.log(`${year}-${month}-${day}/${hours}:${minutes}:${milliseconds}`);

date.setFullYear(1899);
date.setMonth(5);
date.setDate(15);
date.setHours(5);
date.setMinutes(5);
date.setMilliseconds(5);

console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getMilliseconds()}`);