// switch და ternary operator კომბინირებული გამოყენება
// მოამზადე პროგრამა, რომელიც switch -ით განსაზღვრავს თვის სახელს 1-12 შუალედში შეყვანილი რიცხვის მიხედვით და ternary operator -ს იყენებს, რათა განსაზღვროს, არის თუ არა ეს თვე წელიწადის პირველი ან მეორე ნახევარი.

// მაგალითად:
// თუ შეყვანილია 5:

// Switch -> "მაისი"
// Ternary -> "პირველი ნახევარი".

let month = Number(prompt("Enter the number: "))

switch(month){
    case 1:
        alert("January")
        break
    case 2:
        alert("February")
        break
    case 3:
        alert("March")
        break
    case 4:
        alert("April")
        break
    case 5:
        alert("May")
        break
    case 6:
        alert("Juny")
        break
    case 7:
        alert("July")
        break
    case 8:
        alert("August")
        break
    case 9:
        alert("September")
        break
    case 10:
        alert("October")
        break
    case 11:
        alert("November")
        break
    case 12:
        alert("December")
        break
}

let answer = (month <= 6) ? "First half":"Second half"

alert(answer)