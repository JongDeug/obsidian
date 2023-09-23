// Spread 연산자, 전개구문
// 모든 Interable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018
function add(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums){
    console.log(nums);
}
sum(4,6,3,4,5,6,67,78,8998,21);

// Array Concat
const fruits1 = ['사과', '키위'];
const fruits2 = ['딸기', '수박'];
let arr = fruits1.concat(fruits2);
console.log(arr);

arr = [...fruits1, 'zz', ...fruits2];
console.log(arr);

// Object                    ===> 이거이거 뒤지게 편한데?
const ellie = {name: 'jong', age: 25, home: {address: 'home'}};
const updated = {
    ...ellie,
    job : 'sw',
};
updated.home.address = "jonghome";
console.log(updated);
console.log(ellie);

// object를 spread 하려면 {}을 사용해야한다. 
console.log({...obj1});