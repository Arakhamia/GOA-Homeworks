// შექმენით ობიექტი ადამიანზე, რომელშიც იქნება შეტანილი რამოდენიმე თვისება, 1. სახელი   2. გვარი   3. ასაკი   4. წონა    5. სიმაღლე  ასევე ობიექტში შექმენით ცალკე ობიექტი, რომელშიც იქნება შეტანილი ინფორმაცია დედმამიშვილებზე, დედაზე, მამაზე, დაზე, ძმაზე და ა.შ

let person={
    name: "Andria",
    lastName: "Arakhamia",
    weight: 60,
    height: 156,
    family: {
        brother: {
            name: "Gio",
            age: 10,
            height: 150,
            weight: 42,
        },
        mother: {
            name: "Fatima",
            age: 46,
        },
        father: {
            name: "Alexandr",
            age: 46,
        }
    }
}
let n = "name"
console.log(person.family.brother[n])