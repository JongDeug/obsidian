# Dictionary
{key: value ...}

- 값 추가, 삭제
```python
my_dict = {}
type(my_dict)

# dictionary 값 추가
my_dict[0] = 'a'
my_dict['b'] = 2
my_dict['학생1'] = '호박'

del my_dict['b']
print(my_dict)
# print(my_dict['b'])
```

- Method(`values()`, `keys()`, `items()`)
```python
my_dict = {0: 'a', 'b': 2, '학생1': '호박'}

# 값만 추출
for item in my_dict.values():
    print(item)

# 키만 추출
for item in my_dict.keys():
    print(item)

# 키, 값 Unpacking
for key, value in my_dict.items():
    print(key, value)
```
