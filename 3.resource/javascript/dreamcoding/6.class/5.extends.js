// 공통의 양식
class Animal {
    constructor(color){
        this.color = color;
    }
    eat() {
        console.log("먹자!");
    }
    sleep() {
        console.log("잔다!");
    }
}

class Tiger extends Animal {

}
// 부모 생성자 호출
const tiger = new Tiger("노랑색");
console.log(tiger);
tiger.eat();
tiger.sleep();



class Dog extends Animal {
    constructor(color, ownerName){
        super(color); //부모 클래스를 가리킨다.
        this.ownerName = ownerName;
        super.eat(); // eat = () => {} arrow function 사용하면 super.eat(); 선언문 작동안하드라...
    }
    play = () => {
        console.log("놀자~~!~!");
    }

    // 오버라이딩 overriding
    eat = () => {
        super.eat();
        console.log("강아지가 먹는다!");
    }
}
// 자기 생성자 호출
const dog = new Dog("빨갱이", "종환");
console.log(dog);
