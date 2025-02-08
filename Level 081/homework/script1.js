// დაწერეთ პროგრამა, რომელიც სთხოვს 2 მომხმარებელს მათი სახელის შემოტანას, შემოტანილი სახელების სიგრძე შეადარეთ ერთმანეთს, საბოლოო პასუხი გამოიტანეთ log - ში.

let name1 = prompt("Enter your name: ")
let name2 = prompt("Enter your name: ")

if(name1.length > name2.length){
    alert(`${name1} Wins!`)
} else{
    alert(`${name2} Wins!`)
}