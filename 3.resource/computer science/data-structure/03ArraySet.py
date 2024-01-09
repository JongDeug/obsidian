# 집합
class ArraySet:
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

    def contains(self, e):
        for i in range(self.size):
            if self.array[i] == e:
                return True
        return False

    def insert(self, e):
        if not self.contains(e) and not self.isFull():
            self.array[self.size] = e
            self.size += 1

    def delete(self, e):
        for i in range(self.size):
            if self.array[i] == e:
                self.array[i] = self.array[self.size - 1]
                self.size -= 1
                return

    def union(self, setB):
        setC = ArraySet()
        for i in range(self.size):
            setC.insert(self.array[i])
        for i in range(setB.size):
            if not setC.contains(setB.array[i]):
                setC.insert(setB.array[i])
        return setC

    def intersect(self, setB):
        setC = ArraySet()
        for i in range(self.size):
            if setB.contains(self.array[i]):
                setC.insert(self.array[i])
        return setC

    def difference(self, setB):
        setC = ArraySet()
        for i in range(self.size):
            if not setB.contains(self.array[i]):
                setC.insert(self.array[i])
        return setC

    def equals(self, setB):
        total = 0
        for i in range(self.size):
            if self.contains(setB.array[i]):
                total += 1
        if total == self.size:
            return True
        else:
            return False

    def __eq__(self, setB):
        total = 0
        for i in range(self.size):
            if self.contains(setB.array[i]):
                total += 1
        if total == self.size:
            return True
        else:
            return False

    def isSubsetOf(self, setB):
        total = 0
        for i in range(self.size):
            if setB.contains(self.array[i]):
                total += 1
        if total == self.size:
            return True
        else:
            return False


    def __str__(self):
        return str(self.array[0:self.size])


# ====================================================

setA = ArraySet()
setA.insert("휴대폰")
setA.insert("지갑")
setA.insert("손수건")
print("Set A: ", setA)

setB = ArraySet()
setB.insert("빗")
setB.insert("파이썬 자료구조")
setB.insert("야구공")
setB.insert("지갑")
print("Set B: ", setB)

setA.delete("손수건")
setA.delete("발수건")
print("Set A: ", setA)
setB.insert("빗")
print("Set B: ", setB)

print("A U B: ", setA.union(setB))
print("A ^ B: ", setA.intersect(setB))
print("A - B: ", setA.difference(setB))

setC = ArraySet()
setC.insert("휴대폰")
setC.insert("지갑")
print(setC.equals(setA))
print(setC.equals(setB))
print(setC == setA) # __eq__()
print(setC == setB)

# 부분집합 확인
setD = ArraySet()
setD.insert('빗')
setD.insert('야구공')
print("D가 B의 부분집합?: ", setD.isSubsetOf(setB))
