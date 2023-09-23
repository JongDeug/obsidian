// 원시 타입은 copy by value
// 객체 타입은 copy by reference


// 굉장히 중요함 immutablity와 관련이 있음. 
// 생코에서는 var을 써서 mutability와 immutability를 구분했지만, var은 이제 쓰지않음.

let a = 1; // 0x1111 
let b = a; // 0x1234
b = 2;
console.log(a, b);


// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = { // 0x1234
    name : "apple"
};

let orange = apple; // 0x1234
orange.name = "orange";

console.log(apple.name, orange.name);


// 즉 primitive(원시값)에는 value(값)이 들어있고,
// Object(객체)에는 reference(참조)가 들어있다.


