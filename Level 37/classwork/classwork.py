# 1)Task: Format a String
# Write a Python program that takes a user's name and age as input. Use the format() function to create a sentence that says, "Hello, [Name]! You are [Age] years old."

name = input("Enter your name: ")
age = int(input("Enter your name: "))

string = "Hello, {}! You are {} years old.".format(name, age)

print(string)
