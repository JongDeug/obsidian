# Function Type Expression

```typescript
function greeter(fn: (a: string) => void) {
	fn("Hello, World");
}

function printToConsole(s: string) {
	console.log(s);
}

greeter(printToConsole);
```

- 별칭(`type`) 사용
```typescript
type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
	// ...
}
```

- arrow function(화살표 함수)
```typescript
// 흔한 거
const hi1: (x: string, y: string) => string = () => {  
    return 'hi1';  
}  

// 첨보는 거, 바로 구현하는 느낌
const hi2 = (x: string, y: string): string => {  
    return 'hi2';  
}
```