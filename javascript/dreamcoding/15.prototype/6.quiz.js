class Animal{
    constructor(name, emoji){
        this.name = name;
        this.emoji = emoji;
    }

    printName(){
        console.log(`${this.name} ${this.emoji}`);
    }
}

class Dog extends Animal{
    constructor(name, emoji){        // name, emoji를 따로 Dog에서 할당을 안해도 된다면 이 constructor를 생략해도됨.
        super(name, emoji);
    }
    play(){
        console.log("놀아보자!!!");
    }
}

class Tiger extends Animal{
    constructor(name, emoji){         // 여기도 마찬가지!
        super(name, emoji);
    }
    hunt(){
        console.log('사냥하자!!!');
    }
}

const dog = new Dog('멍멍이', '개');
dog.printName();
dog.play();
const tiger = new Tiger('어흥이', '호랑이');
tiger.printName();
tiger.hunt();

// instanceof로 확인할 수 있음
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog instanceof Tiger);
console.log(tiger instanceof Dog);
console.log(tiger instanceof Animal);
console.log(tiger instanceof Tiger);
