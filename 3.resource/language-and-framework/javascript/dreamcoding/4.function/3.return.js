// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨.
function add(a,b){
    return a+b; //이게 없으면
    // return undefined; 임
}
console.log(add(3,3));
const result = add(1,2);
console.log(result);
