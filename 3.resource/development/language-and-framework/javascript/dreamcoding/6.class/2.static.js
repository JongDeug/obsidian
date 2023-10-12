// static 정적 프로퍼티, 메서드
// Fruit class 는 함수가 아니고 template이다. 그래서 자체적으로 접근할 수 없다.
class Fruit{
    static MAX_FRUITS = 4;
    constructor(name, emoji){
        this.name = name
        this.emoji = emoji;
    }

    // 클래스 레벨의 메서드
    static makeFruit = () => {
        // 클래스 레벨의 메서드에서는 this를 참조할 수 없음. 왜? 아무것도 채워지지 않은 템플릿이기 때문에. 애초에 인스턴스화 해서 데이터를 줄 것도 아니잖음.
        return new Fruit("banan", "바나나");
    }

    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    };
}; 


const banana = Fruit.makeFruit();
console.log(banana);

const apple = new Fruit("apple", "사과");
console.log(apple.MAX_FRUITS); //undefined
console.log(apple);

console.log(Fruit);

// static ? 정적인, 움직이지 않는다. ==> 메모리에서 고정되어 있다.
// 왜 쓰는고임?? 장점은 비슷한 형태를 카테고리로 묶어서 사용할 수 있음 like 
Math.pow();
Number.isFinite(1);