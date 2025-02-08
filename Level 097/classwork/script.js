// Object
// შექმენით ობიექტი car, რომელსაც ექნება მინიჭებული თვისებები, ეს თვისებები უნდა იყვეს - 1. brand    2. model    3. year   4. color   5. weight   (თვისებებს მიანიჭეთ მნიშვნელობები თქვენით)
// შექმნილ ობიექტს დაამატეთ მეთოდი, რომელიც გამოიტანს წინადადებას ამ თვისებების დახმარებით - მაგ: 'ამ მანქანის ბრენდია ...., კონკრეტული მოდელია ....' და ა.შ
var car = {
    brand: "Nissan",
    model: "GT-R",
    year: 2007,
    color: "White",
    weight: 1740,
    full: function(){
        return(`Brand/Model: ${this.brand} ${this.model}, Year: ${this.year}, Color: ${this.color}, Weight: ${this.weight}`)
    }
}

console.log(car.full())

// გამოიტანეთ car ობიექტიდან ყველა მნიშვნელობა ინდივიდუალურად.
console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);
console.log(car.weight);

// car ობიექტში შეცვლაეთ ყველა თვისების მნიშვნელობა.
car.brand = "Mercedes"
car.model = "63 AMG"
car.year = 2020
car.color = "Black"
car.weight = 1500

// car ობიექტში დაამატეთ ახალი თვისება, რომელიც იქნება mode.
car.mode = "On/Off"

// car ობიექტში დამატებული თვისება ამოშალეთ.
delete car.mode 

// ობიექტთან გამოიყენეთ პირობითი განცხადებები და შეამოწმეთ ობიექტში მითითებული მანქანის ბრენდი თქვენც გყავთ თუ არა, თუ გყავთ, მაშინ გამოიტანეთ - 'იგივე მანქანის ბრენდი გვყოლია ძმობილო', ხოლო სხვა შემთხვევაში გამოიტანეთ - ' სხვადასხვა მანქანის ბრენდია, ჩემი მოუგებს'

if(car.brand == "Nissan"){
    console.log("Bro we have the same car!")
} else{
    console.log("Naah, bad car, my will win ;)")
}