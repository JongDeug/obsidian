// [Symbol.iterator](): IterableIterator<T>;
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!

// 내가 짠 코드
// function myIterator(start, end){
//     let startNum = start;
//     let endNum = end; 

//     const obj = {
//         [Symbol.iterator] : () => {
//             return {
//                 next: () => {
//                     let result = {
//                         value : startNum * 2,
//                         done : startNum > endNum
//                     }
//                     startNum++;
//                     return result;
//                 }
//             }
//         }
//     };
//     return obj;
// }

// let iterator = myIterator(0, 10);
// for(const item of iterator){
//     console.log(item);
// }

const multiple = {
    [Symbol.iterator]() {
        const max = 10;
        let startNum = 0;
        return {
            next() {
                return {value : (startNum++)*2, done : startNum > max}
            }
        }
    }
}

for(const item of multiple){
    console.log(item);
}


// // iterator는 클래스가 아니라 오브젝트다. 
// class Iterator {
//     // 반환을 해야할게 1. done, 2. value, 3.next()이거잖아?
//     constructor(start = 0, end = Infinity){
//         this.start = start;
//         this.end = end;
//         this.value = 0;
//     }

//     next(){
//         let result;
//         if(this.start < this.end){
//             result = {
//                 value: this.start*2,
//                 done: false
//             }
//         }
//         else if(this.start === this.end){
//             result = {
//                 done: true
//             }
//         }
//         this.start++;
//         return result;
//     }
// }

// class MyIterator extends Iterator{
//     [Symbol.iterator] = () =>{
//         return this.next();
//     }
// }
// let it = new MyIterator(0, 10);
// // var result = it.next();

// // while(!result.done){
// //     console.log(result.value);
// //     result = it.next();
// // }
// for(let item of it){
//     console.log(item);
// }

