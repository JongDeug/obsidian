/**
 * 일급 함수 (first-class function)
 * 함수가 일반 객체처럼 모든 연산이 가능한 것
 * 1. 함수의 매개변수로 전달
 * 2. 함수의 반환값
 * 3. 할당 명령문
 * 4. 동일 비교 대상
 */

/**
 * 고차 함수 (Higher-order function) 
 * 1. 인자로 함수를 받거나(콜백함수)
 * 2. 함수를 반환하는 함수를 고차함수
 */

// callback function
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 고차함수(함수를 인자로 받음)
// action은 콜백함수임. 외부로부터 전달받아놓고 나중에 씀. 컨셉 쥑이네
function calculator(a, b, action) { 
    let result = action(a, b);
    console.log(result);
    console.log(arguments);
    return result;
}


// 함수를 호출하지 않고 함수가 가리키고 있는 주소값을 전달한다.
calculator(1,2,add); //add안에 들어있는 주소값 전달, 호출x
calculator(1,2, multiply);


/**
 * 정리
 * 전달된 action은 콜백함수이다.
 * 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라!!!!!!
 * 함수를 가리키고 있는 함수의 reference(참조값)가 전달된다.
 * 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨.
 */