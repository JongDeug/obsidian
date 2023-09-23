// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}           ==> 어떻게 이게 되지? 바로 함수도 객체이기 때문이지!
let add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));

// 표현식에 sum이라는 이름을 적어줄 수 있지만 외부에서 접근을 할 수 없음. 그래서 보통 생략함.
let iii = function sum(a, b) {
    return a + b;
};
//console.log(sum(1,2));


// 화살표 함수 cosnt name = () => { }       function키워드 생략, ()는 인자임!   쥑이네!
add = (a, b) => {
    return a - b;
};
console.log(add(3, 2));

// 화살표 함수 더 생략할 경우
add = (a, b) => a - b;


// 생성자 함수 const object = new Function(); //뒤 객체편에서 다룸


// IIFE (Immediately-Invoked Function Expressions) 많이 사용은 안함. test용으로 사용해도 될듯
(function run(){
    console.log("hi");
})();