# საშუალო რიცხვის პოვნა ფუნქციით
# შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას და დააბრუნებს სიის საშუალო რიცხვს.

def sum_of_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total

def average_of_list(num_list):
    if len(num_list) == 0:
        return 0
    total = sum_of_list(num_list)
    average = total / len(num_list)
    return average

print(average_of_list([1,2,3,4,5]))