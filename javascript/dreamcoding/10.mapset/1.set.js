// Set : 중복이 안됨.
const set = new Set([1,2,3]);
console.log(set);
console.log(set.size);


// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item));
for(const value of set.values()){
    console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set); // 중복이 되지 않아요~

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set); 

// 오브젝트 세트
const obj1 = {name : '사과', price: 8};
const obj2 = {name : '바나나', price: 5};
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈 set이 그대로일 까요? 3이될까요?
obj1.price = 10;
objs.add(obj1); // 동일한 주소를 추가하는 것과 같음.
console.log(objs);

// 퀴즈 set이 3일까요? 그대로일까요? 
const obj3 = {name: '바나나', price: 5};
objs.add(obj3); // 내용이 동일해도 주소값을 추가하는 것이기 때문에 추가됨.
obj2.price = 45; //주소값을 참조하기 때문에 obj2만 바뀜
console.log(objs);


// 객체만 forEach가 안되길래 궁금해서 하나씩 작성해보았다. TIL 2022.04.23을 보면 더 쉽게 알 수 있을거다.
// console.clear();
// const ob = new Map([[obj1, obj2]]);   //obj1,2 는 이미 map과 비슷한 형태이기 때문에 낱개로 바꿀 수 없는 듯하다.
// ob.forEach((value, key) => console.log(value, key));
// objs.forEach((value) => console.log(value));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj2));
// console.log(Object.keys(obj2));
// for(const i in obj1){
//     console.log(i);
//     console.log(obj1[i]);
// }

const key = Object.keys(obj1);
console.log(key);
const value = Object.values(obj1);
console.log(value);


// object를 map으로 바꿀 수 있는 방법? 그냥 해본거임 ㅇ.ㅇ
let ne = new Map();
key.forEach((value) => {
    ne.set(`${value}`, `${obj1[value]}`);
});
console.log('ne: ', ne);
