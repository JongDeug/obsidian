// 주어진 seconds(초)가 지나면 callback함수를 호출함.
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds){
    let milliseconds;
    if(!seconds || seconds < 0){
        throw new Error("seconds가 0보다 작거나 seconds가 없음");
    } else {
        milliseconds = seconds * 1000;
        setTimeout(callback, milliseconds);
    }
}

// function print(text){
//     const content = text || 'Hello';
//     console.log(content);
// }   


try{
    runInDelay(print, 3);
}catch(error){
    console.log(error);
}