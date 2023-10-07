// javascript는 런타임 상에서 this 바인딩이 동적으로 결정됨.
// java, c# 같은 언어는 정적으로 결정됨.


/**
 * 글로벌 컨텍스트의 this
 * - 브라우저 : globalThis와 this가 같음
 * - 노드 : globalThis는 global 객체를 가리키고, this는 module을 가리키고 있음.
 */

// 중요!!! : this는 객체 메서드, 클래스, 생성자 함수, 또는 함수 레벨에서만 존재함(함수만 globalthis참조). 그 외에는 상위 context 상위 this를 참조함!(밑에서 보는 console.log(this)는 module)
const x = 0;
module.exports.x = x;
const y = 0;
module.exports.y = y;
console.log(this);
console.log(globalThis);
// globalThis.setTimeout(); // global this는 생략이 가능하다.
// setTimeout();

/**
 * 함수 내부에서의 this는 두가지 경우가 존재.
 * 1.엄격 모드에서는 undefined
 * 2.느슨한 모드에서는 globalThis
 */
function fun(){
    console.log(this); // 글로벌 this 출력,   브라우저에서는 window
}
fun();


/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴.
 */
class Cat {
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
    
    print(){
        console.log(`${this.name} : ${this.sound}`);
    }
}

const cat1 = new Cat('jong', '야옹');
const cat2 = new Cat('hwan', '야옹');
cat1.print();
cat2.print();