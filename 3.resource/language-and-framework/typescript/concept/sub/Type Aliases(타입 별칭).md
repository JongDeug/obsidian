# Type Aliases(타입 별칭)

### Type
```typescript
type Point = {
	x: number;
	y: number;
};
```

---

### Interface
```typescript
interface Point {
	x: number;
	y: number;
}
```

- Interface끼리 병합 가능
```typescript
interface A { a: string }
interface A { b: string }
const obj1: A = { a: 'hello', b: 'world' }

// 오류
type B = { a: string }
type B = { b: string }
const obj2: B = { a: 'hello', b: 'world' }
```

---
### Type와 Interface 차이
주로 Interface 사용

- Type
```typescript
type Animal = {
    breath: true
}

type Mammal = Animal & {
    breed: true
}

type Human = Mammal & {
    think: true
}

const jongDeug: Human = {breath: true, breed: true, think: true}
```
- Interface 
```typescript
interface Animal {  
    breath: true  
}  
  
interface Mammal extends Animal {  
    breed: true  
}  
  
interface Human extends Mammal {  
    think: true  
}  
  
const jongDeug: Human = { breath: true, breed: true, think: true}
```

