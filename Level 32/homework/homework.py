#1) განსაზღვრეთ ფუნქცია სახელწოდებით simple_calculator, რომელიც იღებს სამ არგუმენტს:
#num1: პირველი რიცხვი (მთლიანი ან float).
#num2: მეორე რიცხვი (მთლიანი ან float).
#ოპერაცია: სტრიქონი, რომელიც განსაზღვრავს შესასრულებლად ოპერაციას. ის შეიძლება იყოს „დამატება“, „გამოკლება“, „გამრავლება“ ან „გაყოფა“.
#ფუნქციის შიგნით,
#გამოიყენეთ if და elif განცხადებები, რათა დაადგინოთ რომელი ოპერაცია უნდა შეასრულოთ ოპერაციის არგუმენტის მნიშვნელობიდან გამომდინარე.
#ფუნქციამ უნდა დააბრუნოს ოპერაციის შედეგი.
#თუ ოპერაცია არის „გაყოფა“ და num2 არის 0, ფუნქციამ უნდა დააბრუნოს „შეცდომა: ნულზე გაყოფა შეუძლებელია“.
#ჩაწერეთ კოდი, რომ გამოიძახოთ ფუნქცია სხვადასხვა ოპერაციებით და დაბეჭდოთ შედეგები

def simple_claculator(num1, num2, symbol):

    addition = num1 + num2
    deduction = num1 - num2
    multiplication = num1 * num2
    division = num1 / num2


    if symbol not in ('+', '-', '*', '/'):
        print("Invalid operation. Please enter one of +, -, *, /.")
        return
    elif symbol == "+":
        print("addition = " + str(addition))
    elif symbol == "-":
        print("deduction = " + str(deduction))
    elif symbol == "*":
        print("multiplication = " + str(multiplication))
    elif symbol == "/":
        print("division = " + str(division))
    elif symbol == "/" and num1 or num2 == 0:
        print("ZeroDivisionError: number can not be divided by the 0")

        
simple_claculator(12, 52, "-")