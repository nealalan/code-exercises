import math

def is_square(n):
    if n < 0:
        return False
    if n == 0 or n == 1:
        return True
    if math.sqrt(n) == int(math.sqrt(n)):
        return True
    else:
        return False
