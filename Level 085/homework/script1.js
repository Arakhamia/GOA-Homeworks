// switch - დღის განმარტება
// მოამზადე კოდი, რომელიც switch განცხადების გამოყენებით განსაზღვრავს დღის სახელს კვირის დღესთან შესაბამისობაში.

// მაგალითად:

// 1 -> ორშაბათი
// 2 -> სამშაბათი
// ...
// 7 -> კვირა
// თუ რიცხვი 1-დან 7-მდე არ არის, დაბეჭდოს: "არასწორი დღე".

let day = Number(prompt("Enter a number: "))

switch(day){
    case 1:
        alert("ორშაბათი")
        break
    case 2:
        alert("სამშაბათი")
        break
    case 3:
        alert("ოთხშაბათი")
        break
    case 4:
        alert("ხუთშაბათი")
        break
    case 5:
        alert("პარასკევი")
        break
    case 6:
        alert("შაბათი")
        break
    case 7:
        alert("კვირა")
        break
}