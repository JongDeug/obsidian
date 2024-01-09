def printStep(arr, val):
    print("    Step %2d = " % val, end='')
    print(arr)

# 선택 정렬
def selection_sort(A):
    n = len(A)
    for i in range(n-1): # n-2 까지
        least = i
        for j in range(i+1, n): # n-1 까지
            if A[least] > A[j]:
                least = j
        A[least], A[i] = A[i], A[least]
        printStep(A, i+1)

# data = [5,3,8,4,9,1,6,2,7]
# print("Original : ", data)
# selection_sort(data)
# print("Selection : ", data)

def insertion_sort(A):
    n = len(A)
    for i in range(1, n):
        key = A[i]
        j = i - 1
        while j >= 0 and key < A[j]:
            A[j+1] = A[j]
            j -= 1
        A[j+1] = key
        printStep(A, i+1)

# data = [5,3,8,4,9,1,6,2,7]
# print("Original : ", data)
# insertion_sort(data)
# print("Selection : ", data)

def bubble_sort(A):
    n = len(A)
    for i in range(n-1, 0, -1):
        changed = False
        for j in range(i):
            if A[j] > A[j+1]:
                A[j], A[j+1] = A[j+1], A[j]
                changed = True

        if not changed: break
        printStep(A, n - i)

data = [5,3,8,4,9,1,6,2,7]
print("Original : ", data)
bubble_sort(data)
print("Selection : ", data)