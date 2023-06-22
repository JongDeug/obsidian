// 배열 생성 방법
let array = new Array(2);
console.log(array);

array = new Array(1,2,3); // 생성자 함수로 만들기
console.log(array);

array = Array.of(1, 2, 3, 4); // static 함수로 만들기
console.log(array);

const anotherArray = [1,2,3,4,5]; // literal로 만들기
console.log(anotherArray);

array = Array.from(anotherArray); // anotherArray를 그대로 복사  iterable(순회가 가능한 것들은 모조리 ok)
console.log(array);


// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함. 
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음(Typed Collections)   다른 언어들은 애초에 자료형을 정하고 들어가기 때문에 필요가 없음
array = Array.from({
    0: "안",
    1: "녕",
    length: 2 //이걸 안적으면 안만들어지네!! 규칙!
});
console.log(array); 
console.log(array.length)


// ** for, for in, for of 는 javascript 문법이고 
// ** forEach 는 Array.prototype.forEach() built-in 함수이다. 즉 forEach는 배열에만 사용가능하다.