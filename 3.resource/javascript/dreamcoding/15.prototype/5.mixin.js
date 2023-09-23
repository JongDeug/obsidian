// Mixin 섞는다는 것                다중상속이네!
// 오브젝트는 단 하나의 prototype을 가리킬 수 있다. (부모는 단 하나!)
// Mixin!
const play = {
    play: function(){
        console.log(`${this.name} 놀아요!`);
    }
};

const sleep = {
    sleep: function(){
        console.log(`${this.name} 자요!`);
    }
};

function Dog(name){
    this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('멍멍');
dog.play();
dog.sleep();

// javscript는 프로토타입 언어이다. class를 사용한다고 해도 본질은 prototype!


class Animal {}
class Tiger extends Animal {
    constructor (name) {
        super();
        this.name = name;
    }
}
Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥');
tiger.play();
tiger.sleep();