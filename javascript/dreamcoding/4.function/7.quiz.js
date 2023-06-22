// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함.
// (5, 순회하는 숫자를 다 출력하고 싶음)
// (5, 순회하는 숫자의 두배값을 다 출력하고 싶음)

const ouputAllofThem = i => console.log(i);
const ouputDouble = i => console.log(i*2);

function iterate(number, action){
    for(let i=0; i<=number; i++){
        action(i);
    }
}
iterate(5, ouputAllofThem);
iterate(5, ouputDouble);