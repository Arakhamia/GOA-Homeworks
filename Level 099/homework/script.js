// Basic Object Initialization
// Task:
// Create an object named student with the following properties:
// name (string)
// age (number)
// grade (string)
// isEnrolled (boolean)
// Add a method called getInfo() that returns a formatted string with the student's details.
// Update the student's grade to a new value and log the updated object.

let student = {
    name: "John",
    age: 20,
    grade: "A",
    isEnrolled: true,
    getInfo: function(){
        return `${this.name} is ${this.age} years old and has a grade of ${this.grade}.`
    }
}

