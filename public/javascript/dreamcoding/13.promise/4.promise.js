function runInDelay(seconds){
    return new Promise((resolve, reject) => {
        if(!seconds || seconds < 0){
            // reject("reject");
            reject(new Error("seconds가 없거나 seconds가 0보다 작음"));
        }
        setTimeout(resolve, seconds * 1000);
    });
}

// then 에 첫번째 function은 이행값 두번째 function은 거부이유를 인수로 받음.
// runInDelay(-2).then((value) => {console.log(value)}, (reson) => {console.log(reson)});
runInDelay(-2)
    .then(() => console.log("타이머 완료!"))
    .catch(console.error)
    .finally(() => console.log("끝났다!"));
