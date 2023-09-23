// 논리 연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가 : short-circuit evaluation                 나름 좋네
const obj1 = {name: '개'};
const obj2 = {name: '고양이', owner: 'Ellie'};

if(obj1 && obj2){ // boolean 값으로 할당
    console.log('둘다 true!');
}

let result = obj1 && obj2; // obj2가 들어감
console.log(result);
result = obj1 || obj2; // obj1가 들어감
console.log(result);

// 활용예
// && 조건이 truthy일 때, 무언가를 해야 할 경우
// || 조건이 falshy일 때, 무언가를 해아 할 경우
function changeOwner(animal){
    if(!animal.owner){
        throw new Error("주인이 없어");
    }
    animal.owner = '바뀐주인';
}
function makeNewOwner(animal){
    if(animal.owner){   
        throw new Error("주인이 있어");
    }
    animal.owner = '새로운주인';
}

// 연산자의 특징을 잘 생각해서 코드를 읽어봐.
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인 할 때
let item; //={price: 1};
const price = item && item.price;
console.log(item);
console.log(price);

// 기본값을 설정
// default parameter은 값을 전달하지 않거나, undefined인 경우에 설정이됨
function defaultParam(message = 'Hi'){
    console.log(message);
}
defaultParam();
defaultParam(undefined);
defaultParam(null); // null 과 0은 컨트롤할 수 없음.
defaultParam(0);

// 하지만 단축 연산자를 사용하면 || falsy(0, -0, null, undefined, '', null ...)한 경우까지 설정할 수 있음.
function print(message){
    const text = message || "Hello";
    console.log(text);
}
print("gg");
print(null);
print(''); // '' 은 falsy
