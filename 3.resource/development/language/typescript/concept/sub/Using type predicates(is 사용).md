# Using type predicates(is 사용)

- `isString()` 거쳐서 return 값이 true라면, `if(isString(foo)` 내에선 `test`를 `string` 타입으로 보라는 것이다.
```typescript
function isString(test: any): test is string{
	return typeof test === "string";
}

if(isString(foo)){
	// ...
} else{
	// ...
}
```

### custom type guard
```typescript
function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();

// undefined이 아니면 true => Fish
if (isFish(pet)) {
	// Fish
	pet.swim();
} else {
	// Bird
	pet.fly();
}
```

