// სკოლის შეფასების სისტემა
// მომხმარებელი შეჰყავს ქულა (0-100) და უნდა განსაზღვროს, რა შეფასება ეკუთვნის მას შემდეგი პირობის მიხედვით:

// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0 - 59: F

let grade = Number(prompt("Enter your grade: "))

if(90 < grade <= 100){
    alert("A")
} else if(80 < grade <= 89){
    alert("B")
} else if (70 < grade <= 79){
    alert("C")
} else if(60 < grade <= 69){
    alert("D")
} else if(0 < grade <= 59){
    alert("F")
}

// :(