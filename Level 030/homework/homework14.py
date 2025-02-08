#15) შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვების სია,თქვენი მოვალეობააა გამოითვალოთ ამ სიის საშუალო არითმეტიკული.
#test case: [1,3,4,5,2] | output: 3

def calculate_average(numbers):
    if len(numbers) == 0:
        return "list can't be empty"

    sum1 = sum(numbers)

    average = sum1 / len(numbers)
    
    return average

test_case = [1, 3, 4, 5, 2]
print(calculate_average(test_case))