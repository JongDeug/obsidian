from ArrayStack import ArrayStack
import time

# 깊이우선탐색으로 미로의 출구를 찾는 함수
MAZE_SIZE = 6
map = [['1', '1', '1', '1', '1', '1'],
       ['0', '0', '0', '0', '0', '1'],
       ['1', '0', '1', '0', '1', '1'],
       ['1', '1', '1', '0', '0', 'x'],
       ['1', '1', '1', '0', '1', '1'],
       ['1', '1', '1', '1', '1', '1']]


def isValidPos(x, y):
    if 0 <= x < MAZE_SIZE and 0 <= y < MAZE_SIZE:
        if map[y][x] == '0' or map[y][x] == 'x':
            return True
    return False


def DFS():
    print('DFS')
    s = ArrayStack(100)
    s.push((0, 1))

    while not s.isEmpty():
        here = s.pop()
        print(here, end='->')
        (x, y) = here

        if map[y][x] == 'x':
            return True
        else:
            map[y][x] = '.' # 현재 위치 방문 표시
            if isValidPos(x, y - 1):  # 상
                s.push((x, y - 1))
            if isValidPos(x + 1, y): # 우
                s.push((x + 1, y))
            if isValidPos(x, y + 1):  # 하
                s.push((x, y + 1))
            if isValidPos(x - 1, y): # 좌
                s.push((x - 1, y))
        print('현재 스택: ', s)

    return False


# =========================================

# start = time.time()
result = DFS()
if result:
    print(' --> 미로탐색 성공')
else:
    print(' --> 미로탐색 실패')
# finish = time.time()
# print(finish - start)