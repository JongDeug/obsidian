# List

Mutable : List
Immutable : Tuple 

- 값 추가하기
```python
my_students = ['종환', '학동', '빡구']

# 값 추가
my_students.append('동현')
```

- Indexing, Slicing, Delete
```python
animals = ['코알라', '하이에나', '스컹크', '바다소']

# Indexing
print(animals[1])
# Slicing
print(animals[0:2])
# Delete 
del animals[1]
print(animals)
```

- Method(`len()`, `count()`, `sort()`, `split()` ... )
```python
animals = ['코알라', '하이에나', '스컹크', '바다소', '바다소']

animals.sort()
print(animals)

print('바다소 count : {}'.format(animals.count('바다소')))
print('list length : {}'.format(len(animals)))

my_list = 'F T F T'
	# slit() 공백 시 스페이스 기준으로 자름
print(my_list.split())
```

- Unpacking, Destructure

javascript에서 `...`과 같은 것
```python
my_list = [1,2,3,4,5]
print(*my_list)
```
