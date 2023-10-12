# Class

틀 : Class
틀로 만든 실체 : Object

```python
class Calculator:
    def __init__(self):
        self.result = 0

    def add(self, num):
        self.result += num
[]()        return self.result


cal1 = Calculator()
cal2 = Calculator()

print(cal1.add(3))
print(cal1.add(7))
print(cal2.add(5))
print(cal2.add(5))
```
