// We have a function that outputs "Welcome, user" as it is called. We want to make it more
// personalized, so redesign the given function so that it Will take the given input as the
// name Of the user and output the welcome message with it.

function welcome(){
    let name = prompt("Enter you name: ")
    console.log(`Welcome, ${name}!`)
}