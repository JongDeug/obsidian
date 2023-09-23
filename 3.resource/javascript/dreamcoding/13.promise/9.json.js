// JSON : JavaScript Object Notation(표기법)
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object) : JSON
// parse(JSON): object

const jong = {
    name: 'jong',
    age: 20,
    eat: () => {
        console.log('eat');
    }
};


// 직렬화 Serializing : 객체를 문자열로 변환
const json = JSON.stringify(jong);
console.log(jong);
console.log(json);
// json에 들어가는것은 객체의 프로퍼티, 상태만. 함수는 들어가지 않음.

// 역직렬화 Deserializing : 문자열 데이터를 자바스크립트 객체로 반환
const obj = JSON.parse(json);
console.log(obj);