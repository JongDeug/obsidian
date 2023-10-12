# for

- range()
```python
# range 0 ~ 2
for item in range(3):
    print(item)
```

- Comprehension(이해력)
간결하게 만들어 줌.
```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd_numbers = [number for number in numbers if number % 2 == 1]

print(odd_numbers)
```
