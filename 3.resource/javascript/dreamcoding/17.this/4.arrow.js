// 자바스크립트의 함수는 만능 슈퍼맨!
// 함수처럼 사용, 생성자 함수로 사용(클래스)
// 하지만, 이걸 위해서 불필요한 무거은 프로토타입(많은 데이터를 담고 있는 객체) 생성됨
const dog = {
    name: 'Dog',
    play: function(){                                                                         
        console.log('논다멍');
    }
};
dog.play();

// 머시여! 일반 생성자 함수로도 사용할 수 있구나,,   // 객체 안에서 함수 표현식을 사용하면 좋지 않아용!
const obj = new dog.play();
console.log(obj);


// 해결 방법 1. arrow 함수
// play : () => {}

// 해결 방법 2. ES6
const cat ={
    name: 'cat',
    play(){   // 객체의 매서드 (오브젝트에 속한 함수)
        console.log('냐옹');
    }
}
cat.play();
// const obj1 = new cat.play();        // 여기서는 에러남!, 생성자 함수로 사용X

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능 (무거은 프로토타입을 만들지 않아도됨)
 * 3. 함수 자체 arugments 객체를 가지고 있지 않음
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *  - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨.
 */

function sum(a, b){
    console.log(arguments);
}
sum(1,2);

const add = (a,b) =>{
    console.log(arguments); // 함수 안에서의 arguments가 아니라 전역객체의 arguments를 출력해줌.(함수를 감싸고 있는)
}
add(1,2);

const printArrow = () =>{
    console.log(this);         //한단계 감싸고 있는 scope의 객체 this 가리킴.  여기서는 전역객체인 module에 대한 정보를 출력함!
                                // 1.this에서 function안에 있는 this를 출력했을 땐 globalThis였음. 즉 arrow function은 lexical enviroments라는
                                //뜻!
};
printArrow();    

cat.printArrow = printArrow;   // cat에 printArrow를 생성하고 printArrow 함수를 넣어도 
cat.printArrow();              // cat this를 출력하지 않고 module을 출력함. 왜? 정적 바인딩이니깐.