// https://www.typescriptlang.org/docs/handbook/2/classes.html#index-signatures
// 이해 되지 않았던 코드 살짝 수정
type check = (s: string) => boolean;

class MyClass {
    [s: string]: boolean | check;

    check: check = (s) => {
        return this[s] as boolean;
    }
}
