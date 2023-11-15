# Enum(열거형)

```typescript
const enum EDirection {  
  Up,  
  Down,  
  Left,  
  Right,  
}  
  
const ODirection = {  
  Up: 0,  
  Down: 1,  
  Left: 2,  
  Right: 3,  
} as const;  
  
EDirection.Up; // enum member  
ODirection.Up // property
```