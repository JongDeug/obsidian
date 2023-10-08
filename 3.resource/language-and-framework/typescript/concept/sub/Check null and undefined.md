# Check null and undefined

기본적으로 `strictNullChecks` 켜져 있음.
따라서 의도된 `null`이라면 `if` 구문으로 처리해 줘야 함(`undefined`는 애초에 걸러짐).

```typescript
function doSomething(x: string | null) {
	if (x === null) {
		// do nothing
	} else {
		console.log("Hello, " + x.toUpperCase());
	}
}
```

### Non-null Assertion Operator
- `!`를 붙이면 "내가 `x`가 있음을 책임진다." 라는 뜻을 가지게 됨.
- 최대한 `if`를 사용할 것.
```typescript
function liveDangerously(x?: number | null) {
	// No error
	console.log(x!.toFixed());
}
```