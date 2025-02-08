# 2) გატესტეთ ყველა დღეს ნასწავლი ფუნქცია
# .upper()
# .lower()
# .capitalize()
# .swapcase()
# .find()
# len() - თვლის რამდენი ელემენტია
# .append() - list'ის ბოლოში ამატებს ელემენტს
# .insert() - list'ში ამატებს
# .pop() - შლის list'იდან ელემენტს

print("football".upper())
print("FOOTBALL".lower())
print("fooTBAll".capitalize())
print("FoOtBAlL".swapcase())

football = "football"
print(football.find("b"))

list1 = ["doom", "fifa12", "callofduty"]
print(len(list1))

list1.append("pes14")
print(list1)

list1.insert(2, "gta5")
print(list1)

list1.pop(2)
print(list1)
