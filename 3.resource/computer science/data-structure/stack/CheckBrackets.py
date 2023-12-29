from ArrayStack import ArrayStack

# 스택을 이용한 괄호 검사 알고리즘
# 조건1 : 왼쪽 괄호의 개수와 오른쪽 괄호의 개수가 같아야 한다.
# 조건2 : 같은 타입의 괄호에서 왼쪽 괄호가 오른쪽 괄호보다 먼저 나와야 한다.
# 조건3 : 서로 다른 타입의 괄호 쌍이 서로를 교차하면 안 된다.
def checkBrackets(statement):
    stack = ArrayStack(100)
    for ch in statement:
        if ch == '{' or ch == '[' or ch == '(': # if ch in '{[(': 로 간략하게 표현 가능
            stack.push(ch)
        elif ch == '}' or ch == ']' or ch == ')':
            if stack.isEmpty():
                return False
            else:
                left = stack.pop()
                if (ch == '}' and left != '{') or \
                        (ch == ']' and left != '[') or \
                        (ch == ')' and left != '('):
                    return False
    return stack.isEmpty()


# =========================================================

s1 = "{A[(i+1)]=0;}"
s2 = "if((i=0)&&(j==0)"
s3 = "A[(i+1])=0;"
print(s1, "--> ", checkBrackets(s1))
print(s2, "--> ", checkBrackets(s2))
print(s3, "--> ", checkBrackets(s3))
