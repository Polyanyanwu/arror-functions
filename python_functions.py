"""
Function to check if a word reversed is same as original word
Palindrome. ignore spaces
"""


def is_palindrome(str_val):
    """ determine if a word is a palindrome """
    if len(str_val) > 0:
        str_val = str_val.replace(" ", "")  # empty strings
        rev_string = str_val[::-1]
        if str_val.lower() == rev_string.lower():
            return True
    return False


print(is_palindrome('carrace'))
print(is_palindrome('ra cec  ar'))
