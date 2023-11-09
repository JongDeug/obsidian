// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사(메모리주소)
function display(num) {
    num = 5;
    console.log(num);
}
const value = 4;
display(value);
console.log(value);


function displayObj(obj) {
    obj.name; // 요건 절대 안됨
    const ddd = obj; //이지랄 해도 안됨
    ddd.name = "ddsdfsdfd"; // 외부로부터 주어진 인자(오브젝트)를 내부에서 변경하면 안됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log(ddd.name);
    console.log(obj.name);
}
const ellie = {
    name: "Ellie"
};
displayObj(ellie);
