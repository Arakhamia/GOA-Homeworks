# 2) ფუნქცია: რაოდენობის დათვლა
# შექმენი ფუნქცია count_items(item_list, item), რომელიც მიიღებს ორ პარამეტრს:
# item_list - ელემენტების სია.
# item - ელემენტი, რომლის დათვლაც გსურს სიაში.
# ფუნქციამ უნდა დააბრუნოს, რამდენჯერ გვხვდება ეს ელემენტი სიაში.

def count_occurrences(item_list, item):
    return item_list.count(item)

print(count_occurrences([1, 2, 3, 4, 1, 5, 1, 7, 1], 1))