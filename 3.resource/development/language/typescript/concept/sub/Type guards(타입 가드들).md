# Type guards(타입 가드들)
`typeof`를 사용해서 타입 가드, 타입 거리를 축소 시킴.

```typescript
function padLeft(padding: number | string, input: string) {
	if (typeof padding === "number") {
		// padding: number
		return " ".repeat(padding) + input;
	}
	//padding: string
	return padding + input;
}
```

- `string`
- `number`
- `bigint`
- `boolean`
- `symbol`
- `undefined`
- `object`
- `function`

### 여러 가지 종류의 타입 가드
- Array 사용
```typescript
function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    a.slice(1);  
  } else {
    a.toFixed(1);
  }
}
```

- type
```typescript
type B = { type: 'b', bbb: string };
type C = { type: 'c', ccc: string };
type D = { type: 'd', ddd: string };
type A = B | C | D;

function typeCheck(a: A) {
  if (a.type === 'b') {
    a.bbb;
  } else if (a.type === 'c') {
    a.ccc;
  } else {
    a.ddd;
  }
}
```

- instanceof
```typescript
class A {
	aaa() {}
}
class B {
	bbb() {}
}
function aOrB(param: A | B){
	if(param instanceof A){
		param.aaa();
	}
}
// 인스턴스를 넣어야 함.
aOrB(new A());
aOrB(new B());


// class 자체 타입은 typeof class, 클래스 이름은 instance를 가리킴.
class Aclass {
	// ...
}
const a: Aclass = new Aclass('123'); // 클래스 이름
const b: typeof Aclass = Aclass; // class 자체 타입
```

- interface(`is` 사용)
[[Using type predicates(is 사용)]]
```typescript
interface Cat { meow: number }
ieterface Dog { bow: number }

// custom type guard
function catOrDog(a: Cat | Dog): a is Dog {
  if ((a as Cat).meow) { return false }
  return true;
}
const cat: Cat | Dog = { meow: 3 }
if (catOrDog(cat)) {
    console.log(a.bow);
}
if ('meow' in cat) {
    console.log(a.meow);
}
```
