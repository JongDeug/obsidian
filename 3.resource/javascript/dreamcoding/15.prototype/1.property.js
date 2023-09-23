
// Prototype : Javascript는 prototype-based object-orientation이다. 프로토타입 기반으로하는 객체지향 프로그래밍 언어이다.
const dog = {name : '와우', emoji: '왈왈왈왈'};

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name',{
    value: '멍멍',
    writable: false,
    enumerable: false, // 열거를 불가능하게 만들어서 안됨
    configurable: false
});
console.log(dog.name);
console.log(Object.keys(dog));


const student = {};
Object.defineProperties(student, {
    firstName: {
        value: '종화니',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: '김',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    fullName:{
        get(){
            return `${this.lastName} ${this.firstName}`;
        },
        set(name){
            [this.lastName, this.firstName] = name.split(' ');
        },
        configurable: true
    },
    name:{
        value: '왈',
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(student);
student.fullName = '김 종화니그로';
console.log(student.fullName);