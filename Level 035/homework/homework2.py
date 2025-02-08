#4)Classwork 3: Slicing and List Comprehensions
#Create a list named numbers that contains the integers from 1 to 10.
#Use list slicing to create a new list named first_half that contains the first five elements from numbers.
#Use list slicing to create another list named second_half that contains the last five elements from numbers.
#Use a list comprehension to create a new list named squares that contains the squares of each number in the numbers list.
#Print all three lists: first_half, second_half, and squares.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

first_half = numbers[0:5]
second_half = numbers[5:10]

squares = []
for i in numbers:
    squares.append(i**2)

print(first_half)
print(second_half)
print(squares)