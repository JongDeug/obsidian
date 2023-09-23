// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ??는 null, undefined인 경우에만 걸러냄 
// || falshy한 경우 설정(할당)

let num=null; // 0은 falshy
console.log(num || '-1');
console.log(num ?? '-1'); 