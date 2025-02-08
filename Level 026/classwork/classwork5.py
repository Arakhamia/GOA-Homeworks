#6) შექმენით ფუნქცია რომელიც მიიღებს ადამიანის ხელფასს და უთხარით ღარიბია, გაწონასწორებული თუ მდიდარი.

def salary(int1):
    if int1 < 1000:
        print("You are poor!")
    elif int1 > 1000:
        print("You are rich!")

int1 = int(input("Enter your age: "))
salary(int1)