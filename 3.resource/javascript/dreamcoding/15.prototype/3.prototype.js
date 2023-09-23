// const dog1 = {name:'뭉치', emoji:'개색'};
// const dog2 = {name:'초코', emoji:'십샠'};


// javascript 내부적으로는 프로토타입을 사용하는구나! 나는 class 사용하는줄 알았네!
function Dog(name, emoji){
    this.name = name;
    this.emoji = emoji;
    // 인스턴스 레벨의 함수         중복된다! 메모리 낭비!
    // this.printName = () =>{
    //     console.log(`${this.name} ${this.emoji}`);
    // };
}

// 정적 레벨의 함수같지만 아님! 프로토타입 레벨의 함수이다. 그래서 각 인스턴스 이름으로 이 함수를 사용할 수 있음
Dog.prototype.printName = function() {        //() => {} 이렇게 하면 안되넹,   arrow function 을 사용하면 렉시컬 환경에서의 this를 기억함.
    console.log(`${this.name} ${this.emoji}`);                               // 하지만 여기서의 this는 전역 this를 가리키기 때문에 this.name이란 것이 없음. 그래서 에러난 것임.
    console.log(this);
};

const dog1 = new Dog('뭉치', '개색');
const dog2 = new Dog('초코', '십색');
console.log(dog1, dog2);
dog1.printName(); 
dog2.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의하면 (오버라이딩 하면)
// 프로토타입 레벨(부모) 함수의 프로퍼티는 가려진다. (섀도잉 됨)
dog1.printName = function(){
    console.log('오라올아로아로아로아로왈아로아로아로');
}
dog1.printName();


// 정적 레벨
Dog.hello = () => {
    console.log('Hello');
}
Dog.hello();            //static!!
Dog.MAX_AGE = 20;
console.log(Dog.MAX_AGE);