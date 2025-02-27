// write me one more task about date object
// Create a function that displays the current date and time in the format YYYY-MM-DD HH:MM:SS.
// Create a function that takes a user's birthdate as input and calculates their age in years, months, and days. ---- display result on webpage
// Write a function that takes a date as input and displays the corresponding day of the week (e.g., "Monday", "Tuesday").

function displayDateTime(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    console.log(`${year}-${month}-${day}/${hours}:${minutes}`);

}