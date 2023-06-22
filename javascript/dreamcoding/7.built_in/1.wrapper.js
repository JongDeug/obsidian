// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다. 

// 그럼 객체만 사용하면되지 왜 원시값을 사용하느냐? => 객체로 만들면 뚱뚱해져서.

const number = 123; // number 원시 타입(primitive)
console.log(number.toString()); // number 원시타입을 감싸고 있는 Number 객체로 감싸짐.
console.log(number); // number 원시 타입

const text = "text";
console.log(text);
text.length // String 객체
text.trim(); // 양 끝 공백 제거




// built-in? 붙박이의, 내장된 
