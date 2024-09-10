#5) Classwork 5: List Manipulation and Aggregation
#Create a list named temperatures that contains the following values representing daily temperatures: [72, 68, 75, 70, 78, 74, 71].
#Calculate and print the highest temperature using the max() function.
#Calculate and print the lowest temperature using the min() function.
#Calculate and print the average temperature using the sum() function divided by the length of the list.
#Use a list comprehension to create a new list named above_70 that contains only the temperatures above 70 degrees.
#Print the above_70 list.

temperature = [72, 68, 75, 70, 78, 74, 71]

print(max(temperature))
print(min(temperature))
print(sum(temperature) / len(temperature))

above_70 = []
for i in temperature:
    if i > 70:
        above_70.append(i)

print(above_70)