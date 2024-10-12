# ლუწი და კენტ რიცხვთა სიის პოვნა
# შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას და დააბრუნებს ორ ცალკე სიას – ერთში იქნებიან ლუწი რიცხვები, ხოლო მეორეში კენტი რიცხვები.

def even_or_odd(x):
    x_even = []
    x_odd = []

    for i in x:
        if i % 2 == 0:
            x_even.append(i)
        else:
            x_odd.append(i)

    return x_even, x_odd

print(even_or_odd([23,24,56,34]))