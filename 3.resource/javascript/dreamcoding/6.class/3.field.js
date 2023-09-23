// 접근 제어자 - 캡슐화
// priavte(#), public(기본), protected
class Fruit{
    // field 
    #name;
    #emoji;
    #type = "과일"
    constructor(name, emoji){
        this.#name = name
        this.#emoji = emoji;
    }
    display = () => {
        console.log(`${this.#name} : ${this.#emoji}`);
    };
    #dis = () => {
        console.log('private function');
    }
}; 

const apple = new Fruit("apple", "사과");
console.log(apple);
apple.display();
//apple.#name = "오렌지"; // #field는 외부에서 접근이 불가능함.
// apple.#dis(); // 함수도 마찬가지.
