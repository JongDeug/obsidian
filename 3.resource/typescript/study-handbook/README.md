## 이해 되지 않은 코드 수정
https://www.typescriptlang.org/docs/handbook/2/classes.html#index-signatures
```
type check = (s: string) => boolean;

class MyClass {
    [s: string]: boolean | check;

    check: check = (s) => {
        return this[s] as boolean;
    }
}
```
## is 키워드?

https://www.typescriptlang.org/docs/handbook/2/classes.html#this-based-type-guards
```
function isString(test: any): test is string{
	return typeof test === "string";
}

if(isString(foo)){
	...
}else{
	...
}
```

isString() 함수를 거쳐서 retrun 값이 true라면,
type predicate(test is string)에 적힌 말 그대로 
함수가 호출된 범위 내에선 test를 string 타입으로 보라라는 말이다.
