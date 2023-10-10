# Generic Functions
- 추론을 활용하기. 굳이 `add<number>(1,2)`에 `<number>`를 적지 않아도 됨.
```typescript
function firstElement<Type>(arr: Type[]): Type | undefined {
	return arr[0];
}

function add<T>(x: T, y: T): T { 
	return x;
}
add<number>(1, 2); 
add(1, 2); // 추론을 활용하자!
add<string>('1', '2');
add('1', '2'); // 추론을 활용하자!
```

- Generic 선언 위치 기억하기
```typescript
function a<T>() {}
class B<T>() {}
interface C<T> {}
type D<T> = {};
const e = <T>() => {}; // 여기만 다르네
```

### Constraint(제약 조건)
```typescript
function hi<T extends S> 
```
=== 같다 보다 부분 집합이 맞음.
![[Pasted image 20231007184432.png]]

- 유형
```typescript
function add<T extends string>(x: T, y: T): T { return x + y }
add(1, 2);
add('1', '2')


// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends new(...args: any) => any > // 클래스 타입! maybe
// <T extends keyof any> // string | number | symbol
```

- 생성자 매개변수
매개변수 `x`는 생성자 타입만 올 수 있게 제네릭 제한
```typescript
function add<T extends abstract new (...args: any) => any>(x: T): T { 
	return x; 
} 
class A {} 
add(A);
```