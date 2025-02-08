// Define a constructor function named Person that takes name, age, and profession as parameters.

// Inside the constructor, assign these parameters to the properties of the object using the this keyword.

// Add a method named introduce that logs a message to the console introducing the person (e.g., "Hi, I'm [name], a [age]-year-old [profession].").


function Person(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.introduce = function(){
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`)
    }
}