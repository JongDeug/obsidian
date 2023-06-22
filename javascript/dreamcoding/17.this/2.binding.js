// this binding
// Java, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!

// 하지만, Javascript에서는 누가 호출하냐에 따라서 this가 달라짐!
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!

function Cat(name){
    this.name = name;
    this.printName = function(){
        console.log(`고양이의 이름을 출력한다옹 : ${this.name}`);
    };
}
function Dog(name){
    this.name = name;
    this.printName = function(){
        console.log(`강아지의 이름을 출력한다옹 : ${this.name}`);
    };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

// 달라지는 점 : **각각의 this가 동적으로 바뀜.**         java 에서는 cat.printName이 출력됨
dog.printName = cat.printName;
dog.printName();

function printONMonitor(printName){
    console.log('모니터를 준비하고!, 전달된 콜백의 실행!');
    printName(); // 여기에서는 printName을 호출하는 객체가 없음       // 즉 caller가 없기 때문에 undefined가 뜸!
}
printONMonitor(cat.printName);