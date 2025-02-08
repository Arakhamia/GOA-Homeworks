// ამოცანა:
// სთხოვე მომხმარებელს ორი რიცხვის შეყვანა (prompt()-ის გამოყენებით).
// შეადარე ეს ორი რიცხვი:
// რიცხვი 1 მეტია რიცხვი 2-ზე?
// თანაბარია ისინი?
// ყველა პასუხი console.log()-ით გამოიტანე.

let num1 = Number(prompt("Enter a Number: "))
let num2 = Number(prompt("Enter a Number: "))

if(num1 > num2){
    alert(`${num1} is greater.`)
} else if(num2 > num1){
    alert(`${num2} is greater.`)
} else{
    alert(`${num1} is equal to ${num2}.`)
}