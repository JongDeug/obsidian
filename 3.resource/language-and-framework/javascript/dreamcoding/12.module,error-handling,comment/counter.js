let count = 0;

// export default 는 모듈에서 딱 하나만 사용할 수 있음
// export default function increase(){
//     count++;
//     console.log(count);
// }

export function increase(){
    count++;
    console.log(count);
}
export function getCount(){
    return count;
}