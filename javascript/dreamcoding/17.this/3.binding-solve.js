function Cat(name) {
    this.name = name;

    // 2. arrow function 사용 : arrow 함수는 동적 x, 렉시컬 환경에서의 this를 기억해요!
    // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
    this.printName = () => {
        console.log(`고양이의 이름을 출력한다옹 : ${this.name}`);
    };
    // 1. bind 함수를 이용해서 수동적으로 바인딩 해주기
    //this.printName = this.printName.bind(this);

}


const cat = new Cat('냐옹');

function printONMonitor(printName) {
    console.log('모니터를 준비하고!, 전달된 콜백의 실행!');
    printName();
}
printONMonitor(cat.printName);

class Dog {
    constructor(name) {
        this.name = name;
    }
    // 그냥 함수
    print() {
        console.log(`강아지의 이름을 출력한다 : ${this.name}`);
    }
    // 방법 1
    // print =  () => {
    //     console.log(`강아지의 이름을 출력한다 : ${this.name}`);
    // }
    // 방법 2
    print = this.print.bind(this);
}
const dog = new Dog('왈왈');
printONMonitor(dog.print);
// dog.print();

dog.print = cat.printName;
dog.print();



/**
 * this binding 몇 시간 고민 후 결론
 * 
 * node에서 this란 module을 가리키고, globalThis는 globalThis를 가리킴.
 * 
 * this는 클래스, 생성자 함수, 함수안에서 존재함.
 * 
 * 헷갈릴 수 있는게 함수와 생성자 함수임. 생성자 함수와 그냥 함수는 가리키고 있는 this가 다름.
 * 
 * 함수는 node에서 무조건 globalThis를 가리키고,
 * 클래스와 생성자 함수는 앞으로 만들어질 인스턴스 자체를 가리킴.
 * 
 * 그리고 javascript에서의 this는 호출하는 사람에 따라서 동적으로 결정됨.
 */

// 1
const obj1 = {
    // this.name, this.method는 사용안됨.
    // 왜냐면 this는 클래스, 생성자 함수, 함수안에서만 존재하기 때문에.
    name: "jong",
    method: function () {
        console.log(this.name);
    }
}
// obj1.method();
// const hi = new obj1();
// console.log(hi);
console.log(new obj1.method());

const obj6 = {
    name: "jong",
    method: () => {
        console.log(this.name);
    }
}
// console.log(new obj6.method()); error 
// 정리 : 객체를 생성하는 방법에는 객체 리터를 방식, 생성자 함수, Class를 사용하는 방식 3개가 존재.
// Class가 나온 이유는 명확함 생성자 함수를 (Constructor) 대체 하기 사용하기 위해 대체 된거임.

class Call {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    method = () => {
        console.log("hi");
    }
}
const ooo = new Call('jong', "10");
console.log(ooo);
for (const o in ooo) {
    console.log(o);
}
ooo.method();

// 2        이거 그냥 함수가 아니고 생성자 함수임 Object의 대문자랑 인자를 잘보셈.
function Object(name) {
    this.name = name;
    this.method = function () {
        console.log(this.name);
    }
}
const obj = new Object("jong");
console.log(obj);
obj.method();

// 3 
function Object1(name) {
    name = name;
    method = function () {
        console.log(this.name);
    }
}
const obj3 = new Object1("hwan");
// obj3.method();                  이거 에러남. 생성자 함수에서는 this.를 꼭 붙여줘야하는구나 ㅇㅎ




// 살짝 tmi 
// 생성자 함수가 좋은 이유?

// 이렇게 하나하나 만드는 것 보다
const user1 = {
    name: '둘리',
    age: 20
}

const user2 = {
    name: '마이콜',
    age: 30
}


// 이렇게 편리하게 생성할 수 있기 때문에 사용하는거임           생성자 함수를 class로 대체함.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    method() {
        console.log("user", this.name);
    }

    me = function () {
        console.log("user", this.name);
    }

    m = () => {
        console.log("user", this.name);
    }
}

class Us {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    method() {
        console.log("us", this.name);
    }

    // 이건 가능
    // me = () =>{
    // }

    me = function () {
        console.log("us", this.name);
    }

    m = () => {
        console.log("us", this.name);
    }
}
const userr1 = new User("둘리", 20);
const userr2 = new User("마이콜", 30);

const a = new User("둘리", 2);
const b = new Us("둘", 2);

a.method = b.method;
a.method();
a.me = b.me;
a.me();
a.m = b.m;
a.m(); // 진리를 깨달아 버렸다... arrow function 만 this가 정적을 바인딩 되는구나
// java에서는 class 타입이 다르므로 대입 자체가 불가능했는데
// 여기서는 가능하지만 this가 정적으로 바인딩되어 있다는거구만
// console.log(a.method);