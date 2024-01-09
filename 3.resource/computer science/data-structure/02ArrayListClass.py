# 여러 개의 리스트를 사용하기위해
class ArrayList:
    def __init__(self, capacity=100):
        self.capacity = capacity
        self.array = [None] * capacity
        self.size = 0

    def isEmpty(self):
        if self.size == 0:
            return True
        else:
            return False

    def isFull(self):
        if self.size == self.capacity:
            return True
        else:
            return False

    def getEntry(self, pos):
        if 0 <= pos < self.size:
            return self.array[pos]
        else:
            return None

    def insert(self, pos, e):
        if not self.isFull() and 0 <= pos <= self.size:  # 후단 삽입을 가능하게 해야해서 <=size
            for i in range(self.size, pos, -1):
                self.array[i] = self.array[i - 1]
            self.array[pos] = e
            self.size += 1
        else:
            print("overflow")
            exit()  # close program

    def delete(self, pos):
        if not self.isEmpty() and 0 <= pos < self.size:
            e = self.array[pos]
            for i in range(pos, self.size - 1):
                self.array[i] = self.array[i + 1]
            self.size -= 1
            return e
        else:
            print("underflow")
            exit()  # close program

    def __str__(self):
        return str(self.array[0:self.size])

# ========================================================

L = ArrayList(50)

print("최초 ", L)
L.insert(0, 10)
L.insert(0, 20)
L.insert(1, 30)
L.insert(L.size, 40)
L.insert(2, 50)

print("삽입x5 ", L)
L.delete(2)
print("삭제(2) ", L)
L.delete(3)
print("삭제(3) ", L)
L.delete(0)
print("삭제(0) ", L)
