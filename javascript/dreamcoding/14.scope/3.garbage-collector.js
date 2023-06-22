// gc => garbage collector
// 글로벌 변수는 앱이 종료될 때까지 계속 메모리에 유지됨!
const global = 1;
{
    // 블록 내부에서만 존재하고, 블록이 끝나면 자동으로 소멸됨 (GC)
    const local = 1;
}

function print(){
    // 함수 내부에서도 블럭안에서 필요한 경우에는 
    // 필요한 곳에서! 변수를 선언하고 사용해야 함
    if(true){
        let temp = 0;
    }
}