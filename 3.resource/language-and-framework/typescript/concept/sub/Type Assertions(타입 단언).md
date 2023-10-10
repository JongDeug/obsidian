# Type Assertions(타입 단언)

`unknown` 사용했을 때 나중에 타입 단언 사용
### as
```typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

### <>
```typescript
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```
