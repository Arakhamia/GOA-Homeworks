// დაწერეთ პროგრამა, რომელიც მომხმარებელს მოსთხოვს ასაკის შეყვანას. თუ შემოტანილი ასაკი მეტია 5 ზე, მაშინ უნდა გამოიტანოს 'შენ ხარ ბავშვი', თუ ასაკი მეტია 12 - ზე, მაშინ უნდა გამოიტანოს, 'შენ ხარ თინეიჯერი/მოზარდი', თუ ასაკი მეტია 18 - ზე, მაშინ უნდა გამოიტანოს, 'შენ ხარ სრულწოვანი', თუ ასაკი მეტია 80 - ზე, მაშინ უნდა გამოიტანოს, 'დაბერდი ძმაო'.

let age = Number(prompt("Enter Your Age: "))
if(age > 5){
    alert("შენ ხარ ბავშვი")
} else if(age > 12){
    alert("შენ ხარ მოზარდი")
} else if(age > 18){
    alert("შენ ხარ სრულწლოვანი")
} else if(age > 80){
    alert("დაბერდი ძმაო")
}
