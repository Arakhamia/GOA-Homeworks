# 3)შექმენით ფუნქცია is_even(num), რომელიც ამოწმებს, არის თუ არა რიცხვი ლუწი, თუ ლუწია, აბრუნებს True, სხვა შემთხვევაში False.

def is_even(num):
    if num % 2 == 0:
        return True
    else:
        return False
    
print(is_even(1488))