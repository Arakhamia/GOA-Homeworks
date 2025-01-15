// PRACTICE EXERCISE
// while Loop
// Create a timer program that will take the number of seconds as input, output the
// remaining time, and countdown to O.
// You need to output every number, including O.
// Sample Input
// 5
// Sample Input
// 5
// 4
// 3
// 2

let sec = Number(prompt("Enter the time for timer: "))

while (sec >= 0){
    console.log(sec);
    sec--;
}