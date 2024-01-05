from LinkedStack import Node

# 원형 연결 구조
# self.tail == rear
# self.tail.link == front
class LinkedQueue:
    def __init__(self):
        self.tail = None

    def isEmpty(self):
        return self.tail == None
    def isFull(self):
        return False

    def enqueue(self, item):
        node = Node(item, None)
        if self.isEmpty():
            self.tail = node
            # self.tail.link = node
            node.link = node
        else:
            node.link = self.tail.link
            self.tail.link = node
            self.tail = node

    def dequeue(self):
        if not self.isEmpty():
            data = self.tail.link.data
            if self.tail == self.tail.link:
                self.tail = None
            else:
                self.tail.link = self.tail.link.link
            return data

    def size(self):
        if self.isEmpty(): return 0
        else:
            node = self.tail.link
            count = 0
            while not node == self.tail:
                node = node.link
                count += 1
            return count

    def __str__(self):
        arr = []
        if not self.isEmpty():
            node = self.tail.link
            while not node == self.tail:
                arr.append(node.data)
                node = node.link
            arr.append(node.data) # self.tail(rear) 데이터 넣기
        return str(arr)
