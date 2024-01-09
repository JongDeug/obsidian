import queue


class TNode:
    def __init__(self, data, left, right):
        self.data = data
        self.left = left
        self.right = right


# 전위순회
def preorder(n):
    if n is not None:
        print(n.data, end='')
        preorder(n.left)
        preorder(n.right)


# 중위순회
def inorder(n):
    if n is not None:
        inorder(n.left)
        print(n.data, end='')
        inorder(n.right)


count = 0
# 후위순회
def postorder(n):
    if n is not None:
        global count
        postorder(n.left)
        postorder(n.right)
        print(n.data, end='')
        count += 1



# 이진트리의 레벨순회 (BFS)
def levelorder(root):
    Q = queue.Queue(maxsize=20)
    Q.put(root)
    while not Q.empty():
        n = Q.get()
        if n is not None:
            print(n.data, end='')
            Q.put(n.left)
            Q.put(n.right)

# 이진트리 노드 계산 (전위, 후위, 중위로도 계산 가능)
def count_node(n):
    if n is None:
        return 0
    else:
        return 1 + count_node(n.left) + count_node(n.right)

def count_lear(n):
    if n is None:
        return 0
    elif n.left is None and n.right is None:
        return 1
    else:
        return count_lear(n.left) + count_lear(n.right)

def calc_height(n):
    if n is None:
        return 0
    hLeft = calc_height(n.left)
    hRight = calc_height(n.right)
    if hLeft > hRight:
        return hLeft + 1
    else:
        return hRight + 1


d = TNode('D', None, None)
e = TNode('E', None, None)
b = TNode('B', d, e)
f = TNode('F', None, None)
c = TNode('C', f, None)
root = TNode('A', b, c)

print(calc_height(root))