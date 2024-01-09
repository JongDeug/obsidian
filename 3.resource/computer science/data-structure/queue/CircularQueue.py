# 배열로 구현된 원형 큐 클래스
class CircularQueue:
    def __init__(self, capacity=8):
        self.capacity = capacity
        self.array = [None] * capacity
        self.front = 0
        self.rear = 0

    def isEmpty(self):
        return self.front == self.rear

    def isFull(self):
        return self.front == (self.rear + 1) % self.capacity

    def enqueue(self, item):
        if not self.isFull():
            self.rear = (self.rear + 1) % self.capacity
            self.array[self.rear] = item
        else:
            pass

    def dequeue(self):
        if not self.isEmpty():
            self.front = (self.front + 1) % self.capacity
            return self.array[self.front]
        else:
            pass

    def peek(self):
        # 비어있는지 확인이 필요하고, self.front + 1 뿐만 아니라 7 -> 0으로 변하는 것도 고려해야함.
        if not self.isEmpty():
            return self.array[(self.front + 1) % self.capacity]
        else: pass

    def size(self):
        return (self.rear - self.front + self.capacity) % self.capacity

    def __str__(self):
        if self.front < self.rear:
            return str(self.array[self.front+1:self.rear+1])
        else:
            return str(self.array[self.front+1:self.capacity] + self.array[0:self.rear+1])

# =============================================================================================

# q = CircularQueue(8)
# q.enqueue('A')
# q.enqueue('B')
# q.enqueue('C')
# q.enqueue('D')
# q.enqueue('E')
# q.enqueue('F')
#
# print('A B C D E F 삽입: ', q)
# print('삭제 -->', q.dequeue())
# print('삭제 -->', q.dequeue())
# print('삭제 -->', q.dequeue())
# print('    3번의 삭제: ', q)
# q.enqueue('G')
# q.enqueue('H')
# q.enqueue('I')
# print('    G H I 삽입: ', q)

