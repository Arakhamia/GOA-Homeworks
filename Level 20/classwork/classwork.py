#1) შექმენით ცვლადი age და if-else statement რომელიც დაადგენს მომხმარებელი სრულ წლოვანია თუ არა, ანუ თუ მისი ასაკი
#მეტია ან ტოლი 18ის დაუწერეთ: "You are adult". სხვა შემთხვევაში დაუწერეთ: "You aren't adult yet"
age = int(input("Enter your age: "))
if age >= 18:
    print("You are adult!")
else:
    print("You aren't adult yet!")