// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기

class Counter {
    #count;
    constructor(count){
        if(count < 0 || isNaN(count)){
            this.#count = 0;
        }else{
            this.#count = count;
        }
    }

    increment(){
        this.#count++;
    }

    get value(){
        return this.#count;
    }
}

const n = new Counter(-5);
console.log(n.value);
n.increment();
console.log(n.value);
n.increment();
console.log(n.value);
n.increment(); 
console.log(n.value);
n.increment();
console.log(n.value);