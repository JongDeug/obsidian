# Tuple

Immutable : Tuple
Mutable : List

```python
my_tuple = ('요거트', '이에스', '레이')
```

- 괄호 쓰지 않아도 됨
```python
my_tuple = 1, 2, 3
print(type(my_tuple))
``` 

- Packing, Unpacking, Temp
```python
# Packing
my_tuple = 1, 2, 3

# Unpacking
num1, num2, num3 = my_tuple
print(num1)

# temp
num1, num2 = num2, num1
print(num1)
```

