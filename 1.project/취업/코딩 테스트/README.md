
## 코딩 테스트 공부 순서

구현 알고리즘 -> 정렬, 큐, 스택 -> BFS, DFS -> 순열, 조합, 완전 탐색 -> 기타 등등(Prim, 다익스트라)

## 코딩 테스트 Tip

- 30분 ~ 1시간 고민하고 문제 풀이할 것
	- 코드 한줄 한줄 이해하고 백지에 풀이 떠올려보기
- 직접 풀지 못한 문제들을 복습 큐에 저장
- 같은 유형의 문제를 몰아서 풀기(DFS, 순열 ...)
- 시간 복잡도를 생각하면서 문제를 풀어야 한다.
## 해야할 것

- [ ] 계수정렬 정리하기


---

## 코드

간선 리스트를 가지고

인접 리스트

인접 행렬로 바꾸는 코드

```python
V, E = map(int, input().split())

#인접 행렬
arr1 = [[0 for i in range(V)] for j in range(V)]

#인접 리스트
arr2 = [[] for i in range(V)]

for i in range(E):
    a,b = map(int, input().split())
    arr1[a][b] = 1
    arr1[b][a] = 1

    arr2[a].append(b)
    arr2[b].append(a)

print(arr1)
print(arr2)
```

BFS

```python
from collections import deque

V, E = map(int, input().split())
#인접 리스트
arr2 = [[] for i in range(V)]

for i in range(E):
    a,b = map(int, input().split())

    arr2[a].append(b)
    arr2[b].append(a)

def BFS(start):
		# 방문 표시
    visit = [0 for i in range(V)]
		# 큐 생성
    queue = deque()
		# 시작점 추가
    queue.append(start)
    visit[start] = 1
		# 큐가 빌 때 까지
    while len(queue) != 0:
        t = queue.popleft()
        for w in arr2[t]:
	            if visit[w] == 0:
                visit[w] = 1
                queue.append(w)

BFS(4)

BFS(시작점)
큐생성
큐에 시작점 enqueu
방문표시 시작점
while 큐에 데이터있으면 
t= 큐.dequeue
t 와 연결된 모든점 for
wi를 방문 x if
wi 를 방문 체크
큐에 wi를 enqueue

```

주의(차이를 분명히 알기!)

```jsx
for i in range(n, -1, -1):
    print(i, end=' ')

print()
for i in reversed(range(n)):
    print(i, end=' ')
```

---

백준 1406번

```jsx
insert는 시간복잡도가 O(n)이라 시간초과남.
다른 방법으로 사용해야함.
```

---

N 중 for 문 구하기

```python
N = int(input())
arr = [0 for _ in range(N)]

def rec(depth):
    if depth == N:
        print(arr)
        return
    for i in range(4):
        arr[depth] = i
        rec(depth+1)

rec(0)
```

---

주어진 데이터로 모든 순열 만들기

```python
N = int(input())
arr = [0 for _ in range(N)]

def rec(depth):
    if depth == N:
        print(arr)
        return
    for i in range(4):
        arr[depth] = i
        rec(depth+1)

rec(0)
```

---

조합(순서 x)

```python
arr = [1,2,3]
chk = [False, False, False]
tmp = []
ans = []

def subSet(idx, N):
    if idx == N:
        ans.append(tmp[:])
        return
    chk[idx] = True
    tmp.append(arr[idx])
    subSet(idx + 1, N)
    tmp.pop()

    chk[idx] = False
    subSet(idx+1, N)

subSet(0, 3)
print(ans)
```

---

조합 N개중 R개 뽑기

```python
arr = [1,2,3,4,5]
chk = [False for _ in range(len(arr))]
tmp = []
ans = []

def subSet(idx, N, R):
    if len(tmp) == R:
        ans.append(tmp[:])
        return 

    if idx == N:
        return

    chk[idx] = True
    tmp.append(arr[idx])
```

---

N 중 R개 출력 (중복 없음)

```python
N, M = map(int, input().split())
tmp = []

def rec(depth):
    if len(tmp) == M:
        print(' '.join(map(str, tmp)))
        return
    
    for i in range(depth, N+1):
        if i not in tmp:
            tmp.append(i)
            rec(i+1)
            tmp.pop() 

rec(1)
```

![[KakaoTalk_20230828_164905780 1.jpg]]
---

1753

```python
visit = [False로 초기화*N]
ans = [무한대로 초기화*N]
우선순위 큐 만들기.

ans[시작점] = 0
PQ에 시작점 push -> (비용, 정점)

while -> PQ 빌때까지
	PQ에서 pop -> T정점
	T정점이 visit 상태인가? // 왜 여러번?
	visit이 아니라면 visit True한다.
	visit이 이미 True라면 continue한다.

	T를 이용하여 주변을 갱신한다.
	for -> T의 주변 정점: w
		ans[w] > ans[t] + 비용[->w] 이런 상태라면
			ans[w] = ans[t] + 비용[t->w]
			PQ에 (ans[w],w) push를 해야함.

ans를 출력
```

---

백준 14501 퇴사문제 풀이1

```python
N = int(input())
table = [list(map(int,input().split())) for _ in range(N)]
ans = []

def rec(i):
    if i > N:
        return 0

    T, P = table[i-1]
    money = 0

    if i+T <= N+1:
        money = rec(i+T) + P
    
    # 핵심
    money = max(money, rec(i+1))
    return money

print(rec(1))
```

![[KakaoTalk_20230829_224157021.jpg]]
백준 14501 퇴사문제 풀이2

```python

N = int(input())
table = [list(map(int,input().split())) for _ in range(N)]
ans = [0 for i in range(N+1)]
# tmp = []

for i in range(N):
    for j in range(i+table[i][0], N+1):
        if ans[j] < ans[i] + table[i][1]:
            ans[j] = ans[i] + table[i][1]
            print(ans, i, j)

print(ans[-1])
```

![[KakaoTalk_20230829_232431348.jpg]]
동적 프로그래밍으로 풀이 도움 링크

[https://ssoso27.tistory.com/12](https://ssoso27.tistory.com/12)

(** 주의 ) 글에서는 P(상담보수)를 당일로 했는데 이거 틀린거임. 당일이 아니고 그 다음 날로 잡아야 정상적으로 작동함.

링크 코드 보단 풀이2 코드를 참고하셈. 링크는 이해만 하셈.

---

DP 프로그래밍

12865 번

[https://hongcoding.tistory.com/50](https://hongcoding.tistory.com/50)

---

1907 번

from collections import Counter 로 딕셔너리 합치기

딕셔너리 말고 튜플 사용해도 될듯?

```python
from collections import Counter

expression = input()
arr = [1,2,3,4,5,6,7,8,9,10]
tmp = []
ans = []

def saveList(ex):
    saveEx = []
    for i in range(len(ex)):
        if ex[i] == 'H' or ex[i] == 'O' or ex[i] == 'C':
            if ex[i+1] != 'H' and ex[i+1] != 'O' and ex[i+1] != 'C' and ex[i+1] != '0':
                saveEx.append([ex[i], ex[i+1]])
            else:
                saveEx.append([ex[i], '1'])
    return saveEx

def change(ex):
    chg = {}
    for item in ex:
        if item[0] == 'H':
            chg.update(H=chg.get('H',0)+int(item[1]))
        elif item[0] == 'O':
            chg.update(O=chg.get('O',0)+int(item[1]))
        elif item[0] == 'C':
            chg.update(C=chg.get('C',0)+int(item[1]))
    return chg

# 식1
ex1Index = expression.index('+')
ex1 = expression[:ex1Index]
ex1 = list(ex1) + ['0']
ex1 = saveList(ex1)
dicEx1 = change(ex1)

# 식2
ex2Index = expression.index('=')
ex2 = expression[ex1Index+1:ex2Index]
ex2 = list(ex2) + ['0']
ex2 = saveList(ex2)
dicEx2 = change(ex2)

# 식3
ex3 = expression[ex2Index+1:]
ex3 = list(ex3) + ['0']
ex3 = saveList(ex3)
dicEx3 = change(ex3)

def rec(depth):
    if depth == 3:
        ans.append(tmp[:])
        return
    for i in range(len(arr)):
        tmp.append(arr[i])
        rec(depth+1)
        tmp.pop()
    
# 수열 뽑기
rec(0)

# 뽑은 수열로 처리
for item in ans:
    one = item[0]
    two = item[1]
    three = item[2]
    dic1 = {}
    dic2 = {}
    dic3 = {}
    sumdic = {}

    for key in dicEx1:
        dic1[key] = dicEx1[key] * one

    for key in dicEx2:
        dic2[key] = dicEx2[key] * two 
    
    for key in dicEx3:
        dic3[key] = dicEx3[key] * three 

    # dic1과 dic2 합치기!
    sumdic = dict(Counter(dic1)+Counter(dic2))
    
    
    if sumdic == dic3:
        print(one, two, three)
        break
```

---
코딩 테스트 파이썬

