const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if(num1 === Number.Nan){

}
if(Number.isNaN(num1)){

}

// 지수 표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

// 그냥 문자열로 변환
console.log(num4.toString());
console.log(num4.toLocaleString("ar-EG"));

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법

console.log(Number.EPSILON); // (javascript가 식별할 수 있는) 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if(Number.EPSILON > 0 && Number.EPSILON < 1){
    console.log("hello");
}
const num = 0.1 + 0.2 - 0.2; //0.1
console.log(num);

function isEqual(original, expected){
    // return original === expected;
    return Math.abs(original - expected) < Number.EPSILON; // abs 절댓값을 사용해서 -를 +로 만들어주면 original이 작을 때도 확인할 수 있음.
}
console.log(isEqual(1,1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1)); //false  ?!?!!?!
console.log(isEqual(5,7));