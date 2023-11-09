// scope에서 배웠던거
const text = 'hello';
function func() {
    console.log(text);
}
func();

// Closure란 함수와 그 함수를 감싸고 있는 렉시컬 환경에 대한 조합. inner함수에서 그 외부의 함수의 스코프를 엑세스할 수 있는 것을 클로져라고 함.
function outer() {
    const x = 0;
    function inner(){
        console.log(`inside inner: ${x}`);
    }
    return inner;
}
const func1 = outer();
func1();