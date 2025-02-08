# Search Engine (only chad's can solve this)

# PRACTICE EXERCISE
# Search Engine
# You're working on a search engine. Watch your back Google!
# The given code takes a text and a word as input and passes them to a function called
# <b>search</b> .
# The search() function should return "Word found" if the word is present in the text, or
# "Word not found", if it's not.
# sample Input
# "This is awesome"
# "awesome"
# Sample Output
# Word found

def search(text, word):
    if word in text:
        return "word found"
    elif word not in text:
        return "word not found"
    
print(search("I love you", "loe"))