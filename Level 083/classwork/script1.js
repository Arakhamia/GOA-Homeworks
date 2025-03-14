// კალკულატორი
// მომხმარებელი შეიყვანს ორ რიცხვს.
// პირველი რიცხვი: num1
// მეორე რიცხვი: num2

// მომხმარებელი აირჩევს მათემატიკურ ოპერაციას:
// ოპერაციები:
// შეკრება (+)
// გამოკლება (-)
// გამრავლება (*)
// გაყოფა (/)
// აუცილებელია შემოწმდეს:
// შეყვანილი მონაცემები რიცხვებია თუ არა.
// გაყოფის ოპერაციისთვის მეორე რიცხვი ნულზე უნდა შემოწმდეს.

//  # 4.  თუ ყველა პირობა შესრულდება, გამომსახული იქნება ოპერაციის შედეგი.

// არასწორი შეყვანის შემთხვევაში:
// მომხმარებელს ეცნობება შეცდომის შესახებ (მაგ., "გთხოვთ, შეიყვანოთ სწორი რიცხვი" ან "ნული ვერ იქნება გამყოფი").

let num1 = Number(prompt("Enter a Number: "))
let num2 = Number(prompt("Enter second Number: "))

let choose = prompt("Choose the operation: +  -  *  /: ")
if(choose == "+"){
    alert(num1 + num2)
} else if(choose == "-"){
    alert(num1 - num2)
} else if(choose == "*"){
    alert(num1 * num2)
} else if(choose == "/"){
    if(num2 == 0){
        alert("Error: Dividing by the zero")
    }
    else{
        alert(num1 / num2)
    }
}
