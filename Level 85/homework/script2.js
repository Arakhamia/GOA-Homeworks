// switch - ამინდის პროგნოზი
// მოამზადე კოდი, რომელიც switch - ს გამოყენებით განსაზღვრავს ამინდის ტიპს. მომხმარებელი შეიყვანს რიცხვს, რომელიც შემდეგი ამინდების შესატყვისი უნდა იყოს:

// 1 -> მზიანი
// 2 -> წვიმიანი
// 3 -> მოღრუბლული
// 4 -> ქარიანი
// თუ რიცხვი სხვაა -> "არ არის დადგენილი".

let weather = Number(prompt("Enter the number: "))

switch(weather){
    case 1:
        alert("მზიანი")
        break
    case 2:
        alert("წვიმიანი")
        break
    case 3:
        alert("მოღრუბლული")
        break
    case 4:
        alert("ქარიანი")
        break
    default:
        alert("არ არის დადგენილი")
        break
}