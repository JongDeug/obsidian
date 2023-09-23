const fruits = ["banana", "apple", "grape", "peach"];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

// for loop으로 가능!

// 추가, 삭제 - 좋지 않은 방식 : 또옹~! (인덱스를 이용해서 추가하는 것은 별로 좋지 않은 방식이다)
fruits[fruits.length] = "strawberry";
console.log(fruits);

delete fruits[1];
console.log(fruits);

