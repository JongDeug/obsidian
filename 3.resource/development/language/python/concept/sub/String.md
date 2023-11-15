# String

- 여러 줄 할당
```python
my_str = '''종환ㅋㅋ
김
ㅋㅋㅋ
하하'''

print(my_str)
```


- Formatting(`'{}'.format()`)
```python
print('My name is {}'.format('종환김'))
print('{} * {} = {}'.format(2, 3, 2*3))
print('{1} * {0} = {2}'.format(2, 3, 2*3)) # 순서 정할 수 있음
```

- Formatting(`%`  대입)
```python
my_str = "jong hwan!"
print('Hi %s' % my_str)
print('%d %d' % (1, 2))
print('%f' % 3.14)
```

- Indexing
```python
my_str = 'Python'
print(my_str[1])
print(my_str[-1])
```

음수로 하면 뒤에서부터 -1 
![[Pasted image 20231010193002.png]]

- Slicing
```python
my_str = 'Python'

print(my_str[0:3]) # 0부터 3전까지, 0~2
print(my_str[:3]) # 0부터 3전까지
print(my_str[2:]) # 2부터 끝까지
```

- Method(`split()` ...)
```python
my_str = 'Python Javascript'

# 공백을 기준으로 나누다.
print(my_str.split())

# 'J' 기준으로 나누다.
print(my_str.split('J'))
```

- DocString(주석)
```python
# ...
"""이것도 주석입니다."""
'''이것 또한 주석입니다.'''
# ...
```