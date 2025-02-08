// Object Constuctor
// შექმენით ობიექტის კონსტრუქტორი მომხმარებელზე, პარამეტრების სახით შემოიტანეთ
// name
// last name
// phone number
// email
// password
// confrim password
function registration(name, lastName, number, email, pass, confirmpass){
    this.name = name,
    this.lastName = lastName,
    this.number = number,
    this.email = email,
    this.pass = pass,
    this.confirmpass = confirmpass
}

// შექმენით 3 კონსტურქტორი სხვადასხვა მომხმარებელზე
let user1 = new registration("Andria", "Arakhamia", 579123456, "andriaarakhamia@gmail.com", "1234", "1234")
let user2 = new registration("Nikoloz", "Witadze", 579123456, "nikolozwitadze@gmail.com", "1234", "1234")
let user3 = new registration("Sandro", "Zabakhidze", 579123456, "sandrozabakhidze@gmail.com", "1234", "1234")

// თითოეული მომხარებლის ობიექტიდან გამოტაინეთ წინადადება, მაგ: 'ჩემის სახელია ..., ჩემი გვარია ... ' და ა.შ
// user1
console.log(`My name is ${user1.name} ${user1.lastName}, my number is ${user1.number}, and email is: ${user1.email}, password is: ****`);
// user2:
console.log(`My name is ${user2.name} ${user2.lastName}, my number is ${user2.number}, and email is: ${user2.email}, password is: ****`);
// user3
console.log(`My name is ${user3.name} ${user3.lastName}, my number is ${user3.number}, and email is: ${user3.email}, password is: ****`);