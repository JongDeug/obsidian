// 1. Object literal { key : value }
// 1. new Object()
// 1. Object.creat()
// key - 문자, 숫자 문자열, 심볼
// value - 원시값, 객체(함수)

let apple = {
    name: "apple",
    "hello-bye": "hi",
    0: 1,
    ["hello-bye2"]: "hi2"
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple["hello-bye"]); // 대괄호 표기법 bracket notation
console.log(apple[0]);
console.log(apple["hello-bye2"]);

// 속성 추가 ( 동적 추가 )
apple.emoji = "이모지";
console.log(apple.emoji);
console.log(apple);
// 속성 삭제
delete apple.emoji;
console.log(apple);