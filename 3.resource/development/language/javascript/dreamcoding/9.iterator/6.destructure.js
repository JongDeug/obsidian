// 구조 분해 할당 Destructuring Assigment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.

const fruits = ['사과', '키위', '딸기', '바나나'];
const [first, second, ...others] = fruits;
console.log(first, second);
console.log(others);

// 그냥 해봄
// const [one, two, ...other] = ['1', '2', ' 3', '4'];
// console.log(one);

// 직이네 
const point = [1, 2, 8];
const [x, y, z=0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
    return ['apple', '사과'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);


// 원하는 방식을 사용하면됩니다.
const jong = {name: 'jong', age: 25, job: 's/w'};
// function display(person){
//     console.log(person.name);
//     console.log(person.age);
//     ..
// }
function display({name, age, jog}){
    console.log(name);
    console.log(age);
}
display(jong);

const {name, age, job: occupation, pet = '강아지'} = jong;
console.log(pet);
console.log(occupation);


// 배열이든 객체이든 상관없이 destructure을 사용할 수 있구먼