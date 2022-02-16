"""
Function to check if a word reversed is same as original word
Palindrome. ignore spaces
"""

def isPalindrome(str_val):
    if len(str_val) > 0:
        str_val = str_val.replace(" ", "") #empty strings
        revString = str_val[::-1]
        if str_val == revString:
            return True
    return False   

print(isPalindrome('carrace'))
print(isPalindrome('ra cec  ar'))
