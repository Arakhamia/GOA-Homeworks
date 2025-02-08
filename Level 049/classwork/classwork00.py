# პროექტის აღწერა:
# პრობლემა: დაწერეთ პროგრამა, რომელიც ითვლის სტუდენტების ნიშნებს და განსაზღვრავს საუკეთესო სტუდენტს. მომხმარებელი შეიყვანს სტუდენტების 
# სახელებსა და მათ ნიშანს, პროგრამა კი გამოთვლის საშუალო ნიშანს თითოეული სტუდენტისთვის და გამოაცხადებს საუკეთესოს.

def best(x):
    o = []
    for i in x:
        if i >= 90 and i <= 100:
            o.append("A")
        elif i < 90 and i > 80:
            o.append("B")
        elif i < 80 and i > 70:
            o.append("C")
        elif i < 70 and i > 60:
            o.append("D")
        elif i < 60 and i > 50:
            o.append("E")        
        elif i < 50 and i > 0:
            o.append("F")

    user1 = input("Enter your name: ")
    user2 = input("Enter your name: ")
    user3 = input("Enter your name: ")
    user4 = input("Enter your name: ")

    a = f"{user1}, your grade is {o[0]}"
    b = f"{user2}, your grade is {o[1]}"
    c = f"{user3}, your grade is {o[2]}"
    d = f"{user4}, your grade is {o[3]}"

    m = sum(x) / len(x)

    return o, f"max grade is: {max(x)}", f"average grade is: {m}",a, b, c, d
        
print(best([1, 45, 56, 78]))