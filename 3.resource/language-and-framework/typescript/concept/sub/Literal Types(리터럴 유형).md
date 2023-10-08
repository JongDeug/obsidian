# Literal Types(리터럴 유형)

### const
```typescript
const constantString = "Hello World";
constantString;
```

### let
```typescript
let x: "hello" = "hello";
// OK
x = "hello";
// NO
x = "howdy";
```

### Type
- 템플릿 리터럴 타입이 존재(Union 등 사용 가능)
```typescript
type World = "world" | "hell";

// type Greeting = "hello world"
type Greeting = `hello ${World}`;
```

### 함수 예제
```typescript
function printText(s: string, alignment: "left" | "right" | "center") {
// ...
}
// OK
printText("Hello, world", "left");
// NO
printText("G'day, mate", "centre");
```

### Type Assertion으로 해결하기
- 문제 
```typescript
declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };

// NO
handleRequest(req.url, req.method);
```
- 해결(`as const`)
```typescript
const req = { url: "https://example.com", method: "GET" } as const;
// OK
handleRequest(req.url, req.method);
```

