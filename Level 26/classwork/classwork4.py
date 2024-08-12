#5) შექმენით ფუნქცია რომელიც მიიღებს ადამიანის ასაკს და ეტყვის სრულწლოვანია თუ არა

def age(int1):
    if int1 > 18:
        print("You are an adult.")
    elif int1 < 18:
        print("You are a minor.")
        
int1 = int(input("Enter your salary: "))
age(int1)