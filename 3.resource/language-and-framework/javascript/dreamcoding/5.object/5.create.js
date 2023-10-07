// 이렇게 여러개 만들면 매우 불편하니까!
const apple = {
    name : "apple",
    display : function(){
        console.log(`${this.name}: 사과`);
    }
};

const orange = {
    name : "orange",
    display : function(){
        console.log(`${this.name}: 오렌지`);
    }
};
console.log(apple);
console.log(orange);

// 생성자 함수 (대문자)                 class랑 똑같지?                                            es6에서 class 문법이 추가되어 잘 안쓰인데
function Fruit(name, emoji){
    this.name = name;
    this.emoji = emoji;
    // this.display = function(){

    // }
    // this.display = () => {
    //     console.log(`${this.name}: ${this.emoji}`);
    // }
    this.display = () => console.log(`${this.name}: ${this.emoji}`);
    return this; // 생략가능
}

const strawberry = new Fruit("strawberry", "딸기");
console.log(strawberry);