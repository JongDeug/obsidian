# Signatures(Call(=Function), Constructor)

### Call(=Function) Signature
Call Signature이란 함수의 매개변수와 반환 값의 타입을 모두 `type`으로 미리 선언하는 것.
```typescript
type Add = ( a: number, b: number) => number; // call signature
 
const add: Add = (a, b) => a + b
```

- Call Signature in an **object type**
✌️ 오브젝트 타입인 경우, =>를 사용하지 않고 `:`를 사용한다.
```typescript
type Add = {
	( a: number, b: number) : number
}
 
const add: Add = (a, b) => a + b
```

---

### Construct Signature
- type
```typescript
type SomeConstructor = {
	new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
	return new ctor("hello");
}
```

- interface
```typescript
interface CallOrConstruct {
	// 함수와 생성자 같이 사용 가능
	new (s: string): Date;
	(n?: number): string;
}
```