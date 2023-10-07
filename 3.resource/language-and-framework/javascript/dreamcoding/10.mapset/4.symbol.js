const testMap = new Map();
const ke1 = 'key'; //primitive 타입이기 때문에 ke1,2는 같은 값이지 당연히!
const ke2 = 'key';
testMap.set(ke1, 'hello');
console.log(testMap.get(ke2));
console.log(ke1 === ke2);

// Symbol 심벌
// 유일한 키를 생성할 수 있음.
const map = new Map();
const key1 = Symbol('key');
const key2 = Symbol('key');

map.set(key1, 'Hello'); // key1 생성
console.log(map.get(key2)); // key2 q불러오기 (안불러와짐)
console.log(key1 === key2);


// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key'); // 동일한 친구들임 ㅇㅋㅇㅋ?
console.log(k1 === k2);


console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key1)); // 글로벌 레지스트리를 통해서 만들어진 심벌만 keyfor으로 가져올 수 있음.

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]); // 전혀 다른 키임. 
