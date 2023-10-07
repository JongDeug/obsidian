// Iterable 하다는건! 순화가 가능하다는 거지! ==> 형용사는 인터페이스를 나타낸데.   
// [Symbol.iterator](): IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는 것은 
// 순회 가능한 객체다! 라는 것을 의미한다.
// 순회가 가능하면 무엇을 할 수 있냐?
// 바로! 빙글 빙글 도는 반복문, 연산자들을 사용할 수 있어.

// 어떠한 Object가 Symbol.iterator라는 함수가 있다면 iterator 규격에 맞다고 할 수 있다! 


/**
 * 정리 : 이터레이션 프로토콜(Iteration Protocol)을 따르기 위해서는 Iterable 프로토콜을 따라야한다.
 * Iterable 프로토콜을 따른다는 것은 [Symbol.iterator]()를 호출하면 Iterator 프로토콜을 따르는 객체를 리턴해야한다. 객체안에는 next()함수 등이 있다.
 */

// [Symbol.iterator]() 함수나 IterableIterator<T>를 반환한다면 for of, spread 함수 등을 사용할 수 있다. 일반 객체는 가지고 있지 않음.

Array

const array = [1,2,3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterator 사용해보기!
const iterator = array.values();

for(let item of array.entries()){
    console.log(item); 
}

// for of 는 아마도 내부적으로 이런식으로 구현되어 있겠지!
while(true){
    const item = iterator.next();
    if(item.done) break;
    console.log(item.value);
}

Object
// object is not iterable
const obj = {id: 123, name: "jong"}; 
for(const item in obj){ //so, have to use 'in' instead of 'of'
    console.log(item); // key를 반환하네?
}