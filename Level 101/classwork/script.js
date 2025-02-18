// შექმენით academy ობიექტი, სადაც შეიტანთ სვადასხვა თვისებებს, name, courses,  socialLink, reviews(ამ თვისებაზე ობიექტი ჩააშენეთ და მანდ შეიტანეთ 3 მომხმარებლის შეფასება - ხოლო თითო მომხმარებელზე შექმენით კიდევ ცალკე ობიექტი და შეიტანეთ 3 თვისება - 1. name     2.status(parent/child)     3. review)
// გამოიტანეთ ობიექტის თვისება-მნიშვნელობების სია

// გამოიტანეთ ობიექტის თვისებების სია

// გამოიტანეთ ობიექტის მნიშვნელობების სია

// შეამოწმეთ ობიექტს გააჩნია თუ არა რომელიმე თვისება

// ეს ობიექტი გააერთიანეთ ახალ ობიექტთან, რომელშიც იქნება შეტანილი member თვისება

// გაყინეთ ობიექტი

// შეამოწმეთ გაყინულია თუ არა ობიექტი

let academy = {
    name: 'Goal-oriented-academy',
    courses: ['HTML', 'CSS', 'JavaScript'],
    socialLink: 'https://www.facebook.com',
    reviews: {
        user1: {
            name: 'Nino',
            status: 'parent',
            review: 'Good'
        },
        user2: {
            name: 'Nika',
            status: 'child',
            review: 'Good'
        },
        user3: {
            name: 'Andria',
            status: 'child',
            review: 'Excellent'
        }
    }
}

console.log(Object.entries(academy));
console.log(Object.keys(academy));
console.log(Object.values(academy));
console.log(Object.hasOwn(academy, 'name'));


let member = {
    name: 'Andria',
    status: 'child',
    review: 'Good'
}

let newAcademy = Object.assign(academy, member);

newAcademy = Object.freeze(newAcademy);
console.log(Object.isFrozen(newAcademy));