// shallow : 얕은
// 중요함!!!!! 11.6 강의임
const pizza = {name: "pizza", price: 2};
const ramen = {name: "ramen", price: 3};
const sushi = {name: "sushi", price: 1};

// store1에는 pizza 주소와 ramen 주소가 들어가 있음
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log("store1", store1);
console.log("store2", store2);

store2.push(sushi);
console.log("store1", store1);
console.log("store2", store2);

// 그래서 여기서 변경시키면 1,2가 같이 바뀜
pizza.price = 4;
console.log("store1", store1);
console.log("store2", store2);


// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign



// 깊은 복사? 재귀함수, Json.stringify, 라이브러리 사용