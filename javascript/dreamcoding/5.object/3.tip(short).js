const x = 0;
const y = 0;
const coordinate = {x, y}; //{x:x, y:y}; 이걸 축약한 버전 ㄷㄷ    이름이 똑같다면 생략이 가능
console.log(coordinate);

function makeObject(name, age){
    // return {
    //     name : name,
    //     age : age
    // };
    return {
        name,
        age
    };
}