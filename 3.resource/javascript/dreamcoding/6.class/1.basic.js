// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법, 내부적으로는 Prototype적용)
// 2. 클래스 별별별

// 1. 생성자 함수
// function Fruit(name, emoji){
//     this.name = name;
//     this.emoji = emoji;
//     this.display = () =>{
//         console.log(`${this.name} : ${this.emoji}`);
//     }
//     return this; // 생략가능
// }

// 2. 클래스 별별별
class Fruit{
    // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji){
        this.name = name
        this.emoji = emoji;
    }

    // function 키워드 쓰면 안된데
    display () {
        console.log(`${this.name} : ${this.emoji}`);
    };
}; 

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple","사과");
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit("orange", "오렌지");

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {name:"jong"};

apple.display();
orange.display();