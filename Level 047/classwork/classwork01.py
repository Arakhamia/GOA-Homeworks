# სიტყვის რიცხვი ტექსტში
# შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და გამოითვლის, რამდენი სიტყვაა ამ ტექსტში.

def manual_len(variable):
    split_variable = variable.split(" ")
    len_of_variable = len(split_variable)
    return len_of_variable
print(manual_len("Hello World"))