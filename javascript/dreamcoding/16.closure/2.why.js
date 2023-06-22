// 내부 정보를 은닉하고, 공개 함수를(public, 외부) 통한 데이터 조작을 위해
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!


function makeCouter(){
    let count = 0;
    function increase(){
        count ++;
        console.log(count);
    }
    return increase;
}

const increase = makeCouter();
increase();
increase();


// 예전에는 이렇게 사용했구나!! 지금은 class private 주면 끝!

class Counter{
    #count = 0;
    increse(){
        ++this.#count;
        console.log(this.#count);
    }
}
const counter = new Counter();
counter.increse();