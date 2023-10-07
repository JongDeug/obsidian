function execute(){
    console.log('1');
    setTimeout(() => {
        console.log('2');
    }, 3000);
    console.log('3');
}

execute();


// 1, 3 들 call stack에 저장하고 실행한 뒤 setTimeout이 2출력하는 함수를 task Queue에 저장하고 event loop가 call stack, task queue를 감시하면서 
// call stack이 비었을 시 task queue에 있는 callback함수를 call stack에 저장함. 