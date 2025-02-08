#1) განსაზღვრეთ ფუნქცია სახელწოდებით simple_calculator, რომელიც იღებს სამ არგუმენტს:
#num1: პირველი რიცხვი (მთლიანი ან float).
#num2: მეორე რიცხვი (მთლიანი ან float).
#ოპერაცია: სტრიქონი, რომელიც განსაზღვრავს შესასრულებლად ოპერაციას. ის შეიძლება იყოს „დამატება“, „გამოკლება“, „გამრავლება“ ან „გაყოფა“.
#ფუნქციის შიგნით,
#გამოიყენეთ if და elif განცხადებები, რათა დაადგინოთ რომელი ოპერაცია უნდა შეასრულოთ ოპერაციის არგუმენტის მნიშვნელობიდან გამომდინარე.
#ფუნქციამ უნდა დააბრუნოს ოპერაციის შედეგი.
#თუ ოპერაცია არის „გაყოფა“ და num2 არის 0, ფუნქციამ უნდა დააბრუნოს „შეცდომა: ნულზე გაყოფა შეუძლებელია“.
#ჩაწერეთ კოდი, რომ გამოიძახოთ ფუნქცია სხვადასხვა ოპერაციებით და დაბეჭდოთ შედეგები

def basic_op(operator, value1, value2, ):

    addition = value1 + value2
    deduction = value1 - value2
    multiplication = value1 * value2
    division = value1 / value2


    if operator not in ('+', '-', '*', '/'):
        print("Invalid operation. Please enter one of +, -, *, /.")
        return
    elif operator == "+":
        print(str(addition))
    elif operator == "-":
        print(str(deduction))
    elif operator == "*":
        print(str(multiplication))
    elif operator == "/":
        print(str(division))
    elif operator == "/" and value1 or value2 == 0:
        print("ZeroDivisionError: number can not be divided by the 0")

# simple_calculaor-ის ნაცვლად დავარქვი basic_op და ასევე სხვა სახელი დავარქვი num1 და num2