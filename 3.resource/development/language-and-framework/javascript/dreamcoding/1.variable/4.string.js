// 문자열 타입
let string = "안녕하세요";
string = '안녕!';
console.log(string);

// 특수 문자 출력하는 법
string = "'안녕!'";
console.log(string);

string = "안녕! \n 잭아 \t\t내 이름은\\ \u09AC"; // \u 유니코드
console.log(string);

// 탬블릿 리터럴 (Template Literal)
let id = "엘리";
let greetings = "'안녕!," + id + "\n즐거운 하루 보내요!'"; // 불편해,, template literal을 쓰자!
console.log(greetings);

greetings = `'안녕, ${id}야! 
즐거운 하루 보내요!`; // 오,, \t 안써도 되는구나
console.log(greetings);

