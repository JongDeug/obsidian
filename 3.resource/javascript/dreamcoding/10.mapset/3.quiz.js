// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
const noOverlap = new Set(fruits); // shallow copy
console.log(noOverlap);
console.log([...noOverlap]);                   //spread 시키는게 중요하구만!!
console.log(Array.from(noOverlap));

// 선생님
function removeDuplication(array){
    return [...new Set(array)];
}
console.log(removeDuplication(fruits));


// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
let set3 = new Set();
set1.forEach((value) => {
    if(set2.has(value)){ set3.add(value); }
});
console.log(set3);
console.log(set1.values());


// 선생님
function findIntersection(set1, set2){
    const array = [...set1].filter((value) => set2.has(value));
    return new Set(array);
}
console.log(findIntersection(set1, set2));