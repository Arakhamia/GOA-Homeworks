#2) შექმენით 4 ცვლადი და ოთხივეში შემოატანინეთ მომხმარებელს 4 სხვადასხვა ტიპის მნიშნველობა input()'ის მეშვეობით. 
#შემდეგ კი გამოიტანეთ ოთხივე ცვლადის ტიპი და დაწერეთ დასკვნა კომენტარის სახით ( რა მოხდა და რატომ მოხდა ).


#we created a variables of different types with "input function".

city = input("Enter a city name: ")
year = int(input("enter a number after 1000: "))
division = float(input("5/2="))
color = bool(input("Grass is green, True or False?: "))

#now, we asked a computer to show us the types of this variables.

print (type(city))
print (type(year))
print (type(division))
print (type(color))

#they are different types because we wrote: type(input()) function
