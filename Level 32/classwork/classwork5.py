#6) მაქსიმალური რიცხვის პოვნა:
#განსაზღვრეთ ფუნქცია სახელით find_max.
#ფუნქციამ უნდა მიიღოს ორი პარამეტრი: num1 და num2 (ორივე მთელი ან წილადი რიცხვი).
#ფუნქციამ უნდა შეადაროს ორი რიცხვი და დააბრუნოს მათი მაქსიმალური მნიშვნელობა.

def find_max(num1, num2):
    if num1 > num2:
        print(str(num1) + "is the max.")
    elif num2 > num1:
        print(str(num2) + "is the max.")
    else:
        print(str(num1) + " and " + str(num2) + "are equals.")