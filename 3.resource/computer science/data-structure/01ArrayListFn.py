# 배열로 구현된 리스트(함수 버전)
capacity = 100
array = [None] * capacity
size = 0


def isEmpty():
    if size == 0:
        return True
    else:
        return False


def isFull():
    if size == capacity:
        return True
    else:
        return False


def getEntry(pos):
    if 0 <= pos < size:
        return array[pos]
    else:
        return None


def insert(pos, e):
    global size
    if not isFull() and 0 <= pos <= size:  # 후단 삽입을 가능하게 해야해서 <=size
        for i in range(size, pos, -1):
            array[i] = array[i - 1]
        array[pos] = e
        size += 1
    else:
        print("overflow")
        exit()  # close program


def delete(pos):
    global size
    if not isEmpty() and 0 <= pos < size:
        e = array[pos]
        for i in range(pos, size - 1): # size - 1 임을 주의 [i+1]이므로
            array[i] = array[i + 1]
        size -= 1
        return e
    else:
        print("underflow")
        exit()  # close program


def replace(pos, e):
    if not isEmpty() and 0 <= pos < size:
        array[pos] = e
    else:
        print("empty or wrong pos")
        exit()


def count(e):
    total = 0
    for i in range(0, size):
        if array[i] == e:
            total += 1
    return total


# =============================================

print("최초 ", array[0:size])  # index => size - 1
insert(0, 10)
insert(0, 20)
insert(1, 30)
insert(3, 40)
insert(2, 50)
print("삽입x5 ", array[0:size])
delete(2)
print("삭제(2) ", array[0:size])
delete(3)
print("삭제(3) ", array[0:size])
delete(0)
print("삭제(0) ", array[0:size])
replace(0, 50)
print("대체(0) ", array[0:size])
print("카운트(10)", count(10))