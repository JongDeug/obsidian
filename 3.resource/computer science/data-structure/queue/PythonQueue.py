import queue

Q = queue.Queue(maxsize=20)
# LQ = queue.LifoQueue(maxsize=10)
# 큐를 활용한 LifoQueue도 존재함. put get 은 동일

for v in range(1, 10):
    Q.put(v)
print('큐 내용: ', end='')
for _ in range(1, 10):
    print(Q.get(), end=' ')
print()

# put get 은 오버플로우, 언더플로우 발생해도 에러를 발생시키지 않음. 유의!
# 따라서 empty(), full()을 사용해서 상태를 먼저 확인할 것