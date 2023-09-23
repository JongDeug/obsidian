console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval("2+2");
console.log(isFinite(2));
console.log(isFinite(Infinity));

console.log(parseFloat("12.43"));
console.log(parseInt("12.43"));
console.log(parseInt("11"));

// URL (URL, Uniform Resorce Indentifier 하위 개념)
// 아스키 문자로만 구성되어야 함.
// 한글이나 특수문자는 이스케이프 처리해야한다.          escape란? 원래의 의미를 벗어나게 하는것 
const URL = "https://드림코딩.com";
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
let part = "https://드림코딩.com"; // X
part = "드림코딩.com"; // O
console.log(encodeURIComponent(part));