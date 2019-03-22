# assume:
#    all number in input array are positive
#    array has at least 4 values
# no checks are added to validate input!

def sum_two_smallest_numbers(numbers):
    numbers = sorted(numbers)
    return numbers[0] + numbers[1]



if sum_two_smallest_numbers([5, 8, 12, 18, 22]) == 13:
    print ("True")
if sum_two_smallest_numbers([7, 15, 12, 18, 22]) == 19:
    print ("True")
if sum_two_smallest_numbers([25, 42, 12, 18, 22]) == 30:
    print ("True")
