const fruits = ["바나나", "딸기", "포도", "딸기"];
//for loop는 지저분해


// 배열을 빙글 빙글 돌면서 원하는 것을 할때           (이렇게도 사용이 가능하답니다.) forEach함수 안에서 action 함수를 호출하면서 인수를 채워넣음
fruits.forEach(action);

function action(value, index, array) {
    console.log("--------------");
    console.log(value);
    console.log(index);
    console.log(array);
}

// 생략
fruits.forEach((value) => console.log(value));


// 갑자기 생각나서 적음. Nodelist를 배열과 같다고 생각하지만 타입자체가 다름. Array와 같지 않은거지. ㅇㅋㅇㅋ? 


// 조건에 맞는(콜백함수) 아이템을 찾을 때
const item1 = { name: "cup", price: 2 };
const item2 = { name: "pan", price: 1 };
const item3 = { name: "eraser", price: 3 };
const products = [item1, item2, item3, item2];

// find: 제일 먼저 조건에 맞는 아이템을 반환
let result = products.find((value) => value.name === "pan");
console.log(result);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === "pan");
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인 
result = products.some((item) => item.name === "eraser");
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === "eraser");
console.log(result);

// 모든 아이템을 검사!
// 조건에 맞는 모든 아이템을 <새로운 배열로>!
result = products.filter((item) => item.name === "pan");
console.log(result);


console.clear();

// Map 배열의 아이템들을 각각 다른 아이템들으로 매핑할 수 있는, 변환해서 <새로운 배열 생성>!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(nums);
console.log(result);

result = nums.map((item) => {
    if (item % 2 === 0) {
        return item * 2;
    } else {
        return item;
    }
});
console.log(result);

// Flatmap : 중
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

// 활용
result = ["dream", "coding"].flatMap((text) => text.split(""));
console.log(result);


// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, <기존의 배열을 변경>
const texts = ["hi", "abc", "ca", "ha"];
texts.sort();
console.log(texts);

const number = [0, 5, 4, 1, 2, 10];
number.sort();
console.log(number); // 문자로 판단함.. nope!
// 뺐을 때 0보다 작으면 a가 앞으로 정렬, 오름차순
// 뺐을 때 0보다 크면 b가 앞으로 정렬, 내림차순 
number.sort((a, b) => a - b); // 인수로 callback 함수를 주는데 compareFunction임 모르겠으면 mdn ㄱㄱ
console.log(number);

// reduce 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value, index, array) => {
    sum += value;
    // console.log(index);
    // console.log(array);
    return sum;
}, 0);
// result = [1,2,3,4,5].reduce((sum,value) => (sum+= value), 0);
console.log(result);