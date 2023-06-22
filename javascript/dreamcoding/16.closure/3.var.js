function loop(){
    const array = [];
    // var과 let의 차이점!                     즥이네!! var은 블록스코프가 없어서 그냥 5가 출력되는구만
    // var i; var은 이거랑 똑같음.                       for의 블록스코프가 존재하지 않으므로 loop함수 렉시컬환경의 i값을 참조함(스코프 총 2개) 
    // let i; let은 여기와 for 안쪽의 let과 전혀 다름     블록스코프가 존재하므로 각 i의 값들이 렉시컬환경에 저장됨.(스코프 총 3개)
    for(let i=0; i<5; i++){
        array.push(function(){
            console.log(i);
        });
    }
    return array;
}

const array = loop();
console.log(array);
array.forEach((func) => func());