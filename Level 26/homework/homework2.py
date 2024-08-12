#4) შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს სახელს და გვარს და გამოიტანს მისალმებას

def greeting():
    print("Hello" + " " + name + " " + lastname)

name = input("Enter your name: ")
lastname = input("Enter your lastname: ")
greeting()