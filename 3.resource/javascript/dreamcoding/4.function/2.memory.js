// 함수 add에는 function을 담고있는 주소가 들어감
// 찐 함수는 Heap 메모리에 존재
function add(a,b){
    return a+b;
}
const sum = add;

console.log(typeof sum);
console.log(sum(3,5));