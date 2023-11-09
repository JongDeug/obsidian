// Map : key만 중복 불가능, key만 다르다면 value는 중복이 가능.
const map = new Map([
    ['key1', '사과'],
    ['key2', '바나나']
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key3'));

// 추가
map.set('key3', '키위');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점? 둘다 그냥 비슷해보이는건 맞지만 
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
    [key]: milk,
    key: milk
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
// 접근 방식이 다르고 Map에는 사용할 수 있는 함수가 존재한다. 
console.log(obj[key]); // object 접근방식
console.log(map2.get(key)); // map 접근방식