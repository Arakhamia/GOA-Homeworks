#4) შექმენით for loop'ი (range(20)'ით), შიგნით კი დაწერეთ ასეთი if-else condition'ი: თუ i
#(საიტერაციო ცვლადი) ნაკლებია ან ტოლია 10'ის მაშინ გამოიტანოს "Hello world"ები, თუ მეტია 
#10'ზე მაშინ გამოიტანოს "Goodbye world"ები.

for i in range (20):
    if i <= 10:
        print("Hello World!")
    elif i > 10:
        print("Goodbye World!")