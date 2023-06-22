// 동결! Object.freeze   추가 x, 삭제 x, 쓰기 x, 속성 재정의 x
// 단 얕은 꽁꽁 얼림!

// 'use strict';s

const ellie =  {name: '엘리'};
const dog = {name: '와우', emoji: '개색', owner: ellie};
Object.freeze(dog);
// dog.name = '멍멍';
console.log(dog);

// shallow copy 때문에 변경 가능함,, ㅎ!       JSON.stringify parse등등 사용해서 해결하면됨
ellie.name ='종환';
console.log(dog);


// 밀봉! Object.seal     값의 수정 okay!!!, 추가 x, 삭제 x, 속성 재정의 x
const cat = {};       // {...dog}; spread연산자 사용가능
Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
cat.amuna = '스컬';
console.log(cat);
delete cat.emoji; // 삭제 안됨
console.log(cat);


console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));



// 확장 금지 preventExtensions      추가 X, 다른건 다 okay
const tiger = {name : '으헝'};
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '이히히힣히';
console.log(tiger);
delete tiger.name; // 삭제o
console.log(tiger);
tiger.age = 1; // 추가x
console.log(tiger);