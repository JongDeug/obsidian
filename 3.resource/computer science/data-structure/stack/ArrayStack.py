# 스택
class ArrayStack:
    def __init__(self, capacity):
        self.capacity = capacity
        self.array = [None] * capacity
        self.top = -1

    def isEmpty(self):
        return self.top == -1

    def isFull(self):
        return self.top == self.capacity - 1

    def push(self, e):
        if not self.isFull():
            self.top += 1
            self.array[self.top] = e
        else:
            pass

    def pop(self):
        if not self.isEmpty():
            self.top -= 1
            return self.array[self.top + 1]
        else:
            pass

    def peek(self):
        if not self.isEmpty():
            return self.array[self.top]
        else:
            pass

    def __str__(self):
        # return str(self.array[0:self.top+1])
        return str(self.array[0:self.top+1][::-1]) # 역순 O
        # return str(self.array[self.top:-1:-1]) # 역순 X, 중간 -1은 작동되지 않음.

# =============================================

# s = ArrayStack(100)
# msg = input("문자열 입력: ")
# for chr in msg:
#     s.push(chr)
#
# print("문자열 출력: ", end="")
# while not s.isEmpty():
#     print(s.pop(), end="")
# print()
#
# sA = ArrayStack(10)
# for i in range(1, 6):
#     s.push(i)
# print('push 5회: ', s)