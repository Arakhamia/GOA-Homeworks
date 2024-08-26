#14) შექმენით ფუნქცია რომელიც მომხმარებელს შემოატანინებს რიცხვს და დაპრინტავს ეს რიცხვი თუ იყოფა 3ზე ან 5ზე ან ორივეზე

def thirtyfive(x):

    if x % 3 == 0 and x % 5 == 0:
        print("This number can be divided by three and five.")
    elif x % 3 == 0:
        print("This number can be divided by three.")
    elif x % 5 == 0:
        print("This number can be divided by five.")
    else:
        print("This number can not be divided by three or five")

        
thirtyfive(15)