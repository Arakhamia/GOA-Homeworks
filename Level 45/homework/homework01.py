# 3)ფუნქცია: ჯამის გამოთვლა
# შექმენი ფუნქცია sum_of_list(num_list), რომელიც მიიღებს რიცხვების სიას და დააბრუნებს სიაში არსებული ყველა რიცხვის ჯამს.
# ფუნქცია უნდა გამოიყენოს for ციკლი.

def sum_of_list(num_list):
    sum = 0
    for i in num_list:
        sum += i
    return sum
    
print(sum_of_list([1,2,3,4,5]))