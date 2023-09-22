// quiz1 : 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ["바나나", "딸기", "포도", "딸기"]
// output: ["바나나", "키위", "포도", "키위"]
const input = ["바나나", "딸기", "포도", "딸기"];
const output = input.map((value) => value === "딸기" ? "키위" : value);
console.log(output);


// quiz2 : 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: ["바나나", "키위", "포도", "키위"], "키위"
// output : 2
const input2 = ["바나나", "키위", "포도", "키위"];
const word = "키위";
const output2 = input2.filter((item) => item === word).length;
console.log(output2);


// quiz3 : 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input : ["바나나", "키위", "포도"], ["바나나", "딸기", "포도", "딸기"]
// output : ["바나나", "포도"]
const input3 = ["바나나", "키위", "포도"];
const input4 = ["바나나", "딸기", "포도", "딸기"];
let output3 = input4.filter((value) => {
    return input3.includes(value);
});
// console.log(input4.indexOf('딸기')); 딱 하나만 리턴하네
output3 = output3.filter((value, index) => {
    return output3.indexOf(value) === index; //만약 중복됐을 시 indexOf로 찾게되면 무죄건 젤 앞에 index만 반환하기 때문에 나중에 나온 중복값은 index랑 같을 수 없음.
});

console.log(output3);

// quiz4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const avg = nums
    .filter((value) => value >= 5) // [16, 5, 25, 34, 21]
    .reduce((sum, value, _, array) => {                           //reduce(accumulator, currentValue, currentIndex, array) 반환값은 accumulator 누산기에 저장됨
        return sum + (value / array.length);
    }, 0)
console.log(avg);
