// quiz1 : 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ["바나나", "딸기", "포도", "딸기"]
// output: ["바나나", "키위", "포도", "키위"]
const input = ["바나나", "딸기", "포도", "딸기"];
function quiz1(array) {
    const output = Array.from(array);
    for (let i = 0; i < output.length; i++) {
        if (output[i] === "딸기") {
            output.splice(i, 1, "키위");
            // output[i] = "키위";
        }
    }
    return output;
}
console.log(quiz1(input));

// quiz2 : 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: ["바나나", "키위", "포도", "키위"], "키위"
// output : 2
const input2 = ["바나나", "키위", "포도", "키위"];
const word = "키위";
function quiz2(array, word) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            ++count;
        }
    }
    return count;
}
console.log(quiz2(input2, word));


// quiz3 : 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input : ["바나나", "키위", "포도"], ["바나나", "딸기", "포도", "딸기"]
// output : ["바나나", "포도"]
const input3 = ["바나나", "키위", "딸기"];
const input4 = ["바나나", "딸기", "포도", "딸기"];
function quiz3(array1, array2) {
    let output = [];
    for (let i = 0; i < array1.length; i++) {
        // 내가 짠 코드는 복잡해보임 ㅎㅎ
        // for (let j = 0; j < array2.length; j++) {
        //     if (array1[i] === array2[j]) {
        //         if(!output.includes(array1[i])){
        //             output.push(array1[i]);
        //         }
        //     }
        // }

        if (array2.includes(array1[i])) {
            output.push(array1[i]);
        }
    }
    return output;
}
console.log(quiz3(input3, input4));

