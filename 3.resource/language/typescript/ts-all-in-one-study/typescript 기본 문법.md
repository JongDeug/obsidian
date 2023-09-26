
- typescript는 변수, 매개변수, 리턴값에 타입을 붙이는 것
- 타입 추론을 적극 활용하자.


### ! (non-null assertion)
```typescript
let head = document.querySelector("#head")!;
```

원래 type은 Element | null 임. 
하지만 !를 붙이면 "내가 head가 있음을 책임진다"라는 뜻을 가지게 됨.


### enum
```typescript
const enum EDirection {  
	Up,  
	Down,  
	Left,  
	Right  
}
```


### typeof, keyof
```typescript

```

as const를 사용해서 type을 정교하게 만듦.
그래서 Key의 타입은 "123" | "hello" | "world" 가 될 것임.