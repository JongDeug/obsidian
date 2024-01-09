# 이진 탐색(순환 구조)
def binary_search(A, key, low, high):
    if low > high:
        return -1

    middle = (low + high) // 2

    if A[middle] == key:
        return middle
    elif key > A[middle]:
        return binary_search(A, key, middle + 1, high)
    elif key < A[middle]:
        return binary_search(A, key, low, middle - 1)


# 이진 탐색 (반복 구조)
def binary_search_iter(A, key, low, high):
    while not low > high:
        middle = (low + high) // 2

        if key == A[middle]:
            return middle
        elif key > A[middle]:
            low = middle + 1
        elif key < A[middle]:
            high = middle - 1
    return -1


print(binary_search_iter([1, 2, 4, 5, 6, 7, 8, 10], 7, 0, 8))
