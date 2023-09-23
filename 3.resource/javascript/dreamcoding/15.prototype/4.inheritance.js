// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji){
    this.name = name;
    this.emoji = emoji;
}

Animal.prototype.printName = function(){
    console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner){
    // call()이랑 super(name, emoji)이랑 똑같다고 보면됨
    Animal.call(this, name, emoji);
    this.owner = owner;
}

// Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () =>{
    console.log('같이 놀자용!');
};

const dog1 = new Dog('멍멍', 'rothor','종드기');
dog1.play();
dog1.printName();




function Tiger(name, emoji){
    Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = function(){
    console.log('사냥하자!! ....');
};

const tiger = new Tiger('어흥이', '호랑이');
tiger.hunt();


// instanceof로 확인할 수 있음
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger instanceof Dog);
console.log(tiger instanceof Animal);
console.log(tiger instanceof Tiger);
