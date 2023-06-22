// quiz
const prop = {
    name: 'Button',
    styles: {
        size: 20,
        color: 'black',
    }
};

function changeColor({name, styles: {color}}){
    console.log(color);
    // console.log(name);
    // console.log(styles); error남  styles는 변수가 아니라 참고용임 접근을 할 수 없음
}
changeColor(prop);
