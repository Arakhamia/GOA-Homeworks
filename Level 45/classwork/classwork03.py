# What is the output of this code?
def sum(x):
    # res is equal to zero
    res = 0
    # we create a for loop
    for i in range(x):
        # in every iteration res + i (1 + 2....)
        res += i
    return res

print(sum(4))