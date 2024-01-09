# 정렬되지 않은 배열을 이용한 우선순위 큐 클래스

class PriorityQueue:
    def __init__(self, capacity=10):
        self.capacity = capacity
        self.array = [None] * capacity # Basic
        # self.array = [(None,None,None)] * capacity # for MazePQueue
        self.size = 0

    def isEmpty(self):
        return self.size == 0

    def isFull(self):
        return self.size == self.capacity

    def enqueue(self, e):
        if not self.isFull():
            self.array[self.size] = e
            self.size += 1

    def findMaxIndex(self):
        if self.isEmpty(): return -1
        highest = 0
        for i in range(0, self.size):
            if self.array[i] > self.array[highest]: # Basic
            # if self.array[i][2] > self.array[highest][2]: # for MazePQueue
                highest = i
        return highest

    def dequeue(self):
        highest = self.findMaxIndex()
        if highest != -1:
            self.size -= 1 # index에 맞게끔
            self.array[highest], self.array[self.size] = self.array[self.size], self.array[highest]
            return self.array[self.size]

    def peek(self):
        highest = self.findMaxIndex()
        if highest != -1:
            return self.array[highest]

    def __str__(self):
        return str(self.array[0:self.size])

# =======================================================================================================

# q = PriorityQueue()
# q.enqueue(34)
# q.enqueue(18)
# q.enqueue(27)
# q.enqueue(45)
# q.enqueue(15)
# print("PQueue: ", q)
# while not q.isEmpty():
#     print("Max Priority = ", q.dequeue())


