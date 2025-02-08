#8) შექმენით while loop'ი რომელიც დათვლის რიცხვებს 1დან 100მდე თუმცა გამოტოვებს რიცხვებს 50დან 60მდე.

num1 = 1

while num1 <= 100:
    if num1 >= 50 and num1 <= 60:
        num1 += 1
        continue
    print(num1)
    num1 += 1
