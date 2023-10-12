// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지를 중점으로 봅시다.
const fruits = ["banana", "apple", "grape", "peach"];

//특정한 오브젝트가 배열인지 아닌지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf("apple"));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes("apple"));

// 추가 - 제일 뒤
let length = fruits.push("watermelon"); // length 까지 return해줌
console.log(fruits); 
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift("strawberry");
console.log(fruits);
console.log(length);


// 제거 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞                          //직이네,,
lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem);

// <기존 배열 변경>
// 중간에 추가 또는 삭제
fruits.splice(1, 1); // splice랑 slice랑 다름 ㅎㅎ
console.log(fruits);
const deleted = fruits.splice(0, 1); // 삭제한 엘리먼트 반환
console.log(fruits);
console.log(deleted);

fruits.splice(1, 0, "사과", "딸기"); // 1번째 인덱스 자리에 사과 딸기 추가됨
console.log(fruits);

// <새로운 배열 생성>
// 잘라진 새로운 배열을 만듦
let newArr = fruits.slice(0, 2); //2는 제외하고 0~1
console.log(newArr);
console.log(fruits);


// 이상한 에러 : console.log 여기서 부터 잘리니까 제대로 보려면 밑부분 싹 다 주석처리
// 여러개의 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();
// 중첩 배열을 하나의 배열로 쫙펴기
let arr = [
    [1,2,3],
    [4, [5, 6]]
];
console.log(arr);
console.log(arr.flat()); // 1단계까지만
console.log(arr.flat(2)); // 2단계 오호! 3단계도 지정하면 ok!
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0); //배열 자체를 수정
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(" | ");
console.log(text);
