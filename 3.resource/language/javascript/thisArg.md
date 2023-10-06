
thisArg에 this를 넘겨주면, this로 접근할 때의 참조를 변경할 수 있게됨.
	예로 bind함수가 있음.
```typescript
const jong = {  
    name: 'jong',  
    sayHello() {  
        console.log(`${this.name}`);  
    }  
};  
  
const sayHello = jong.sayHello;  
// 여기서 {name: 'nero'} 는 thisArg임
const sayHi = jong.sayHello.bind({name: 'nero'});
```

```typescript
type ThisFunc = {  
    name: string,  
}  
function a(this: ThisFunc, param: string){  
    console.log(this.name);  
}  
  
const hak = {name: 'dong'};  
const jong = {name: 'hwan'};  
  
// thisArg: hak  
const bindHak = a.bind(hak, 'a');  
// thisArg: jong  
const bindJong = a.bind(jong, 'a');  
bindHak(); // dong  
bindJong(); // hwan
```