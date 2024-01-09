from CircularQueue import CircularQueue
import time

# 너비우선탐색으로 미로의 출구를 찾는 함수
MAZE_SIZE = 6
# map = [['1', '1', '1', '1', '1', '1'],
#        ['0', '0', '0', '0', '0', '1'],
#        ['1', '0', '1', '0', '1', '1'],
#        ['1', '1', '1', '0', '0', 'x'],
#        ['1', '1', '1', '0', '1', '1'],
#        ['1', '1', '1', '1', '1', '1']]
map = [['1', '1', '1', '1', '1', '1'],
       ['0', '0', '1', '0', '0', '1'],
       ['1', '0', '0', '0', '1', '1'],
       ['1', '0', '1', '0', '1', '1'],
       ['1', '0', '1', '0', '0', 'x'],
       ['1', '1', '1', '1', '1', '1']]


def isValidPos(x, y):
    if 0 <= x < MAZE_SIZE and 0 <= y < MAZE_SIZE:
        if map[y][x] == '0' or map[y][x] == 'x':
            return True
    return False


def BFS():
    q = CircularQueue()
    q.enqueue((0, 1))
    print('BFS: ')

    while not q.isEmpty():
        here = q.dequeue()
        print(here, end='->')
        (x, y) = here

        if map[y][x] == 'x':
            return True
        else:
            map[y][x] = '.'  # 현재 위치 방문 표시
            if isValidPos(x, y - 1):  # 상
                q.enqueue((x, y - 1))
            if isValidPos(x, y + 1):  # 하
                q.enqueue((x, y + 1))
            if isValidPos(x - 1, y):  # 좌
                q.enqueue((x - 1, y))
            if isValidPos(x + 1, y):  # 우
                q.enqueue((x + 1, y))

    return False


# =========================================

# start = time.time()
result = BFS()
if result:
    print(' --> 미로탐색 성공')
else:
    print(' --> 미로탐색 실패')
# finish = time.time()
# print(finish - start)
