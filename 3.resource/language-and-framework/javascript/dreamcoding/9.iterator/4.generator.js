//function* (별)을 사용
function* multipleGenrator(){
    let i = 0;
    try{
        for(i; i<10; i++){
            console.log(i);
            yield i**2;
        }
    } catch(error){
        console.log("error");
    }
}
const multiple = multipleGenrator();
let next = multiple.next(); // next()함수로 for문 컨트롤
console.log(next.value, next.done);
multiple.next();  // next() 함수를 호출해야지 위에 있는 for문이 돌아감
multiple.next();  // next() 함수를 호출해야지 위에 있는 for문이 돌아감
next = multiple.next();  // next() 함수를 호출해야지 위에 있는 for문이 돌아감
console.log(next.value, next.done);
multiple.throw("Error!"); // error 던지기 함수  ==> try catch문으로 에러잡기
multiple.return(); // iterator 끝내는 함수


