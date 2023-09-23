// Bubbling up, Propagating 전파 ~ 전파 ~ 전파 ~
function a(){
    throw new Error("error!");
}

function b(){
    try{
        a();
    } catch(error){
        console.log('생각해보니깐 이 에러는 내가 잡지 못할 것 같군!');
        throw error;
    }
}

function c(){
    b();
}

try{
    c();
} catch(error){
    console.log('Catched!');
}
console.log("done!");