

## 실습할 자료 링크(소스 코드 버전에 따라 변동 가능)
- [axios](https://github.com/axios/axios/blob/v1.x/index.d.ts)
- [react](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts)
- [nodejs](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/index.d.ts)
- [express](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/express/index.d.ts)
- [jQuery](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jquery/JQuery.d.ts)
- [redux](https://github.com/reduxjs/redux/blob/master/src/index.ts)

애초에 ts인 redux, 패키지 내부에서 d.ts를 제공하는 axios, @types 패키지가 별도로 존재하는 react, node, express, jquery로 구분됨. @types는 DefinitelyTyped라는 프로젝트로, 커뮤니티에서 라이브러리 타이핑을 제공하는 것.


# ts 기본 문법



- enum, keyof, typeof
as const 를 사용해서 type을 정교하게 만듦.
=> Key는  "123" | "hello" | "world" 가 됨.
```typescript
const obj = {  
    a : '123',  
    b : 'hello',  
    c : 'world'  
} as const;  
  
type Key = typeof obj[keyof typeof obj];

type Point = { x: number; y: number };
type P = keyof Point;
```

```typescript
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}
 
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
 
EDirection.Up;
           
(enum member) EDirection.Up = 0
 
ODirection.Up;
           
(property) Up: 0
 
// Using the enum as a parameter
function walk(dir: EDirection) {}
 
// It requires an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}
 
walk(EDirection.Left);
run(ODirection.Right);
```




- union, intersection
```typescript
function add(x: string | number, y: string | number): string | number { return x + y }
add(1, 2)
add('1', '2')
add(1, '2')

type A = {
    a: string;
}
type B = {
    b: string;
}

const aa: A | B = { a: 'hello', b: 'world' };
const bb: A & B = { a: 'hello', b: 'world' };

```

- 객체 리터럴은 잉여 속성 검사가 있음.
```typescript
type A = { hello: string };
const a: A = { hello: 'world', why: 'error' };

const b = { hello: 'world', why: 'error' };
const c: A = b;
```

- void 타입은 return값을 사용하지 않겠다는 뜻(메서드나 매개변수에서는 리턴값 사용 가능, but 조심해야 함)
1. 함수에 직접적으로 void를 사용했을 경우 -> return 값 사용 x
2. 매개변수, 메서드는 void를 사용해도 return을 쓸 수 있게 만듦. 하지만 return을 예외처리하게 됨.
```typescript
declare function forEach<T>(arr: T[], callback: (el: T) => undefined): void;
// declare function forEach<T>(arr: T[], callback: (el: T) => void): void;
let target: number[] = [];
forEach([1, 2, 3], el => target.push(el));

interface A {
    talk: () => void;
}
const a: A = {
    talk() { return 3; }
}
```

- 타입만 선언하고 싶을 때 declare(구현은 다른 파일에 있어야 함)
- 다른 모듈에서 구현되어 있고 타입만 선언하고 싶을 때 사용함.
```typescript
declare const a: string;
declare function a(x: number): number;
declare class A {}

// 추후 declare module, declare global, declare namespace도 배움
```

- 타입간 대입 가능 표
![image](https://user-images.githubusercontent.com/10962668/179646513-3c3be896-3bbc-4784-848b-06bc47e8b129.png)
초록색 v도 x로 보면 됨. 




- readonly
```typescript
interface A {
  readonly a: string;
  b: string;
}
```

- Index Signature 
```typescript
// 어떤 키든 간에 다 숫자였으면 좋겠어
type A = { [key: string]: number };
const a: A = {a:3, b:4, c:5};
```

- Mapped Types
```typescript
type B = 'Human' | 'Mammal' | 'Animal';
type A = {[key in B]: number};
const a: A = {Human: 123, Mammal: 5, Animal: 7};
```

- class에 private, protected 추가됨
```typescript
class B implements A {
  private a: string;
  protected b: string;
}
class C extends B {}
new C().a;
new C().b;
```

- abstract class, abstract method
```typescript
abstract class X {
  abstract work(user: User): boolean;
}
class Y extends X {
  work(user: User): boolean {
    return true;
  }
}
```

- abstract class, abstract 생성자
```typescript
const constructor: abstract new (...args: any) => any = ...
```

- class vs interface
런타임에서 있냐 없냐의 차이.

- 추상 클래스와 인터페이스의 공통점과 차이점
공통점 : 
1. 메서드의 선언만 있고 구현 내용이 없다 (추상 메서드)
2. new 키워드를 통해 객체를 생성할 수 없다.
3. 상속받은 클래스가 반드시 선언된 추상 메서드를 구현하도록 함
차이점 :
1. abstract class는 extends(상속, 확장의 느낌)
2. interface는 implements(상속, 구현의 느낌)

- optional
```typescript
function abc(a: number, b?: number, c: number?) {}
abc(1)
abc(1, 2)
abc(1, 2, 3)

let obj: { a: string, b?: string }  = { a: 'hello', b: 'world' }
obj = { a: 'hello' };
```




- Type predicate, is 키워드
```typescript
interface Array<T>{  
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];  
}  

// 반환값 string[] | number[] 타입
const stringNumberFiltered= ['1', 2, '3', 4, '5'].filter((value) => typeof value === 'string');  

// value is string 사용해서 반환값 string[] 타입
const stringFiltered= ['1', 2, '3', 4, '5'].filter((value): value is string => typeof value === 'string');
```

- 함수에서 공변성과 반공변성 주의!
리턴값은 더 넓은 타입에 더 좁은 타입 대입 가능, 반대는 불가능
매개변수는 상관없음.  (일단 좁은거에 넓은거 대입 가능이라고 생각하면됨, 반대 가능)
```typescript

// ---------------------------------------- 가능
function a(x: string): number {
  return 0;
}
type B = (x: string) => number | string;
let b: B = a;

// ---------------------------------------- 불가능
function a(x: string): number | string {
  return 0;
}
type B = (x: string) => number;
let b: B = a;

// ---------------------------------------- 가능
function a(x: string | number): number {
  return 0;
}
type B = (x: string) => number;
let b: B = a;

// ---------------------------------------- 가능
function a(x: string): number {
  return 0;
}
type B = (x: string | number) => number;
let b: B = a;
```

- 함수 오버로딩
```typescript
function add(x: number, y: number): number
function add(x: string, y: string): string
function add(x: any, y: any) {
  return x + y;
}

interface Add {
  (x: number, y: number): number;
  (x: string, y: string): string;
}
const add: Add = (x: any, y: any) => x + y;
```

- infer 타입 추론, extends에서만 사용가능함.
- infer는 타입스크립트가 알아서 추론해주는 것을 말함.
- infer는 타입 내에서 추론된 값으로 다시 새로운 타입을 만드는 것(밑에 utility types 참고).
- 타입스크립트는 건망증이 심하다
```typescript
try {
  await axios.get();
} catch (err) {
  console.error(err.response?.data);
}
```
- this 타이핑
```typescript
function (this: Window, a: number, b: number) {
  console.log(this);
}
```

## utility types로 알아보기
[링크](https://www.typescriptlang.org/docs/handbook/utility-types.html)

- Partial : 모두 옵셔널로 만들어줌.
```typescript
interface Profile {  
    name: string,  
    age: number,  
    married: boolean,  
}

type newProfile: Partial<Profile> = {
    name: 'jong',  
    age: 26,  
}

type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

- Required : 옵셔널을 필수로 만들어줌.
```typescript
interface Profile {  
    name?: string,  
    age?: number,  
    married?: boolean,  
}


const newProfile: Required<Profile> = {  
    name: 'jong',  
    age: 26,  
    married: false,  
}

type Required<T> = {
    [P in keyof T]-?: T[P];
};
```

- ReadOnly : 모두 readonly 속성으로 만들어줌.
```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```

- Pick
```typescript
const newProfile : Pick<Profile, 'name' | 'age'> = {  
    name: 'jong',  
    age: 26  
}

// K extends keyof T : Pick할 때 T에 없는 값을 쓰면 걸려줘야하기 때문에 사용.
// keyof T = 'name' | 'age' | 'married'
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

- Record
```typescript
interface Obj {  
    [key: string]: number;  
}
// 위와 아래가 같은 것
type a = Record<string, number>;

type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```

- Exclude : 몰아내다.
```typescript
type Animal = 'Cat' | 'Dog' | 'Human';  
type Mammal = Exclude<Animal, 'Human'>  


type Exclude<T, U> = T extends U ? never : T;
```

- Extract : 추출하다.
```typescript
type Animal = 'Cat' | 'Dog' | 'Human';  
type Human = Extract<Animal, 'Cat' | 'Dog'>

type Extract<T, U> = T extends U ? T : never;
```

- Omit : 생략하다.
- K extends keyof any : S는 string | number | symbol 만 오게끔 만들어줌.
```typescript
const newProfile : Omit<Profile, 'married'> = {  
    name: 'jong',  
    age: 26  
}

// K extends keyof any : S는 string | number | symbol 만 오게끔 만들어줌.
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

- NonNullable
- Null과 Undefined를 빼고 가져오고 싶을 때 사용.
```typescript
type A = string | null | undefined | boolean | symbol;  
type B = NonNullable<A>;

type NonNullable<T> = T extends null | undefined ? never : T;
```

- Parameters: 함수의 파라미터들 가져오기
- infer는 extends에서만 사용가능하다.
```typescript
function zip(x: number, y: string, z: boolean): { x: number, y: string, z: boolean } {  
    return {x, y, z};  
}  
  
type Params = Parameters<typeof zip>

// 추론 조건 ? 추론 성공 시 값 : 추론 실패 시 값
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```

- ConstructorParameters
```typescript
class A {  
    a: string;  
    b: number;  
    c: boolean;  
    constructor(a:string, b:number, c:boolean) {  
        this.a = a;  
        this.b = b;  
        this.c = c;  
    }  
}  
type C = ConstructorParameters<typeof A>;  
							
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
```

- ReturnType : Parameters 구현에서 infer 위치만 바꿔주면 구현 가능함.
```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

- InstanceType
```typescript
class A {  
    a: string;  
    b: number;  
    c: boolean;  
    constructor(a:string, b:number, c:boolean) {  
        this.a = a;  
        this.b = b;  
        this.c = c;  
    }  
}  
type I = InstanceType<typeof A>;


type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
```

- Awaited : Promise 관련
```typescript
const p1 = Promise.resolve(1)  
    .then((a)=> a + 1)  
    .then((a) => a.toString());  
  
const p2 = Promise.resolve(2);  
const p3 = new Promise((res, rej) => {  
    setTimeout(res, 1000);  
});  
  
Promise.all([p1,p2,p3]).then((result) => {  
    console.log(result);  
});
```

- bind : 함수형 프로그래밍에서 많이 사용함.
- ThisParameterType : this만 추출
- OmitThisParameter : this만 배제
```typescript
type ThisFunc = {  
    name: string,  
}  
function a(this: ThisFunc, param: string){  
    console.log(this.name);  
}  
  
const hak = {name: 'dong'};  
const jong = {name: 'hwan'};  
  
// thisArg: hak  
const bindHak = a.bind(hak, 'a');  
// thisArg: jong  
const bindJong = a.bind(jong, 'a');  
bindHak(); // dong  
bindJong(); // hwan  
  
// This만 추출  
const t: ThisParameterType<typeof a> = a;  
// This만 배제  
const noThis: OmitThisParameter<typeof a> = a;
```

- Flat : 배열 차원 줄이기
```typescript
const a = [1, 2, 3, [1, 2], [[1], [2]]].flat(2);


type FlatArray<Arr, Depth extends number> = {  
    "done": Arr,  
						// ReadonlyArray<T> 여기서 T는 배열 요소 타입
						// first:  number[] | number[][] | numbewr[][][]
    "recur": Arr extends ReadonlyArray<infer InnerArr>  
		// infer 해주면서 한 차원 줄어듦. 완전복잡한타입분석하기(flat)강의 9:20 초
        ? FlatArray<InnerArr, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]>  
        : Arr  
}[Depth extends -1 ? "done" : "recur"];

// FlatArray<InnerArr, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth] : 설명
const b = [-1,0,1,2,3][1] //배열[1] 이므로 0이 출력
```

- 기타
```typescript
/**
 * Convert string literal type to uppercase
 */
type Uppercase<S extends string> = intrinsic;

/**
 * Convert string literal type to lowercase
 */
type Lowercase<S extends string> = intrinsic;

/**
 * Convert first character of string literal type to uppercase
 */
type Capitalize<S extends string> = intrinsic;

/**
 * Convert first character of string literal type to lowercase
 */
type Uncapitalize<S extends string> = intrinsic;

function applyStringMapping(symbol: Symbol, str: string) {
    switch (intrinsicTypeKinds.get(symbol.escapedName as string)) {
        case IntrinsicTypeKind.Uppercase: return str.toUpperCase();
        case IntrinsicTypeKind.Lowercase: return str.toLowerCase();
        case IntrinsicTypeKind.Capitalize: return str.charAt(0).toUpperCase() + str.slice(1);
        case IntrinsicTypeKind.Uncapitalize: return str.charAt(0).toLowerCase() + str.slice(1);
    }
    return str;
}

/**
 * Marker for contextual 'this' type
 */
interface ThisType<T> { }
```

## 마무리 강의
## Distributive Conditional Types

conditional type 을 제네릭 타입에 적용하면 분배 법칙이 성립되는데  
이걸 피하려면 
	To avoid that behavior, you can surround each side of the `extends` keyword with square brackets.
 `[ ]`를 붙여라.
 
```typescript
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

type StrArrOrNumArr = ToArrayNonDist<string | number>;
```

### never와 관련해서 헷갈리는 것
```typescript
let onlyBoolean = <T extends boolean>(arg: T= false): T => {
    return arg;
};

// (arg: T = false)에서 오류 발생
// why?

type isNeverExtendsBoolean = never extends boolean ? 'yes' : 'no'; // yes

onlyBoolean<never>(); // never인데 기본값이 false는 허용되지 않음.
```

### Union & Intersection
```typescript
type Union<T> = T extends { a: infer U, b: infer U } ? U : never;
type Result1 = Union<{ a: 1 | 2, b: 2 | 3 }>;

// 반공변성 2 | 3 ⊂ 1 | 2    =>  결과는 2
type Intersection<T> = T extends {
    a: (pa: infer U) => void,
    b: (pb: infer U) => void
} ? U : never;
type Result2 = Intersection<{ a(pa: 1 | 2): void, b(pb: 2 | 3): void }>;
```
매개변수에 infer 을 넣으면 교집합 기능이 실행됨.
why? 함수의 공변성 반공변성 때문
매개변수는 좁은 타입에  더 넓은 타입을 넣는게 가능

### Ambient declaration(엠비언트 선언), declare
외부에 자바스크립트 파일이 있고 그거에 대한 dts 파일을 따로 만들고자 할 때 사용함.
엠비언트 선언도 선언 병합이 된다.
```typescript
declare namespace NS {
	const v: string;
}
declare enum Enum {
	ADMIN = 1
}
declare function func(param: number): string;
declare const variable: number;
declare class C {
	constructor(p1: string, p2: string);
}

new C(func(variable), NS.v);
```


![[Pasted image 20231007210507.png]]

```typescript
declare class A {
	constructor(name: string);
} 
// 생성자 함수
function A(name: string){
	return new A(name);
}
// 자바스크립트에서는 가능한데 타입스크립트에서 둘다 선언은 어렵기 때문에 declare를 사용하면 편하게 할 수 있음.
new A('jong');
A('jong');
```


### 값과 타입

![[Pasted image 20231007210445.png]]

컴파일 했을 때 javascript에 남아있는 것들은 값 O
typescript에만 있는 것들은 타입 O

### Decorator 데코레이터
좀 어려운 부분이 있어서 일단 skip.





# ts 라이브러리 분석
- package.json의 types 속성에 적힌 파일이 메인 타이핑 파일임.
- npmjs.com에서 패키지를 검색했을 때 패키지 우측에 TS로 뜨면 ts 지원 라이브러리이고, DT로 뜨면 @types를 설치해야 하며, 그것마저도 없으면 직접 타이핑해야 함
- 첫 번째 줄부터 보기 보다는 마지막 줄 exports default나 export = 부분을 보고 거슬러 올라가는 게 좋음
- 제네릭이 제일 읽기 어려워서 제네릭 부분은 따로 필기하면서 보는게 좋음

## 모듈 시스템
```typescript
export = A // commonjs
import A = require('a') // commonjs

export = A
export as namespace A // UMD

export default A // ESM
import A from 'a'; // ESM
```

```typescript
declare global {}
export {} // export나 import 필요
```

## jQuery의 타이핑
```typescript
$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
$(["p", "t"]).text("hello");
const tag = $( "ul li" ).addClass(function( index ) {
  return "item-" + index;
});
$(tag).html(function (i: number) {
  console.log(this);
  return $(this).data('name') + '입니다';
});
```

```typescript
export = jQuery;

declare const jQuery: JQueryStatic;
declare const $: JQueryStatic;

interface JQueryStatic {
  <TElement extends HTMLElement = HTMLElement>(html: JQuery.htmlString, ownerDocument_attributes?: Document | JQuery.PlainObject): JQuery<TElement>;
  <TElement extends Element = HTMLElement>(selector: JQuery.Selector, context?: Element | Document | JQuery | JQuery.Selector): JQuery<TElement>;
}

interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
  addClass(className_function: JQuery.TypeOrArray<string> | ((this: TElement, index: number, currentClassName: string) => string)): this;
  removeClass(className_function?: JQuery.TypeOrArray<string> | ((this: TElement, index: number, className: string) => string)): this;
  on<TType extends string>(
    events: TType,
    handler: JQuery.TypeEventHandler<TElement, undefined, TElement, TElement, TType> | false
  ): this;
}
```


## axios의 타이핑
index.d.ts

```typescript
declare const axios: AxiosStatic;
export default axios;

export interface AxiosStatic extends AxiosInstance {
  create(config?: CreateAxiosDefaults): AxiosInstance;
  Cancel: CancelStatic;
  CancelToken: CancelTokenStatic;
  Axios: typeof Axios;
  AxiosError: typeof AxiosError;
  readonly VERSION: string;
  isCancel(value: any): value is Cancel;
  all<T>(values: Array<T | Promise<T>>): Promise<T[]>;
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
  isAxiosError<T = any, D = any>(payload: any): payload is AxiosError<T, D>;
  toFormData(sourceObj: object, targetFormData?: GenericFormData, options?: FormSerializerOptions): GenericFormData;
  formToJSON(form: GenericFormData|GenericHTMLFormElement): object;
}

export interface AxiosInstance extends Axios {
  <T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): AxiosPromise<R>;
  <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): AxiosPromise<R>;

  defaults: Omit<AxiosDefaults, 'headers'> & {
    headers: HeadersDefaults & {
      [key: string]: AxiosHeaderValue
    }
  };
}

export class Axios {
  constructor(config?: AxiosRequestConfig);
  defaults: AxiosDefaults;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  getUri(config?: AxiosRequestConfig): string;
  request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
  get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  head<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  options<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  postForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  putForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  patchForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
}

export interface AxiosResponse<T = any, D = any>  {
  data: T;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: AxiosRequestConfig<D>;
  request?: any;
}
```

## react의 타이핑
[소스 링크](https://github.com/ZeroCho/ts-react/tree/master/2.%EB%81%9D%EB%A7%90%EC%9E%87%EA%B8%B0)

export = React; declare namespace React, declare global, namespace JSX
```typescript
import React = require('react');
import * as React from 'react';
React.useEffect
```
return에 무엇이 들어갈 수 있을까? JSX, string, null?
```typescript
function App(): JSX.Element {
  ...
}

const App: FC<{}> = () => <div />;

interface Element extends React.ReactElement<any, any> { }

interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
}

type JSXElementConstructor<P> =
        | ((props: P) => ReactElement<any, any> | null)
        | (new (props: P) => Component<any, any>);
      
class Component<P, S> {
  render(): ReactNode;
}

interface FunctionComponent<P = {}> {
//    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null; // React17
    (props: P, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
}

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;
type ReactFragment = {} | Iterable<ReactNode>;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
interface ReactPortal extends ReactElement {
    key: Key | null;
    children: ReactNode;
}

type FC<P = {}> = FunctionComponent<P>;

interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
}

type VFC<P = {}> = VoidFunctionComponent<P>;

interface VoidFunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
}
```
훅 타이핑
```typescript
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;

function useRef<T>(initialValue: T): MutableRefObject<T>;
function useRef<T>(initialValue: T|null): RefObject<T>;
function useRef<T = undefined>(): MutableRefObject<T | undefined>;

interface MutableRefObject<T> {
    current: T;
}
interface RefObject<T> {
    readonly current: T | null;
}

function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
function useEffect(effect: EffectCallback, deps?: DependencyList): void;

type EffectCallback = () => (void | Destructor);
type DependencyList = ReadonlyArray<unknown>;
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never };

function useCallback<T extends Function>(callback: T, deps: DependencyList): T;
function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
```

tsconfig.json "jsx": "react"로

```typescript
import * as React from 'react';
import { useState, useCallback, useRef } from 'react';

const WordRelay = () => {
    const [word, setWord] = useState('제로초');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef(null);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        const input = inputEl.current;
        if (word[word.length - 1] === value[0]) {
          setResult('딩동댕');
          setWord(value);
          setValue('');
          if (input) {
            input.focus();
          }
        } else {
          setResult('땡');
          setValue('');
          if (input) {
            input.focus();
          }
        }
    }, [word, value]);

    const onChange = useCallback((e) => {
        setValue(e.currentTarget.value) 
    }, []);

    return (
        <>
          <div>{word}</div>
          <form onSubmit={onSubmitForm}>
            <input
              ref={inputEl}
              value={value}
              onChange={onChange}
            />
            <button>입력!</button>
          </form>
          <div>{result}</div>
        </>
      );
};

export default WordRelay;
```


## redux의 타이핑
```typescript

```

```typescript
export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T, ...extraArgs: any[]): T
}

export interface Action<T = any> {
  type: T
}

export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any
}

export interface ActionCreator<A, P extends any[] = any[]> {
  (...args: P): A
}

export type Reducer<S = any, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S

export interface MiddlewareAPI<D extends Dispatch = Dispatch, S = any> {
  dispatch: D
  getState(): S
}

export interface Middleware<
  _DispatchExt = {}, // TODO: remove unused component (breaking change)
  S = any,
  D extends Dispatch = Dispatch
> {
  (api: MiddlewareAPI<D, S>): (
    next: D
  ) => (action: D extends Dispatch<infer A> ? A : never) => any
}
```

## react-redux의 타이핑
```typescript
export const useSelector = /*#__PURE__*/ createSelectorHook()

export function createSelectorHook(
  context = ReactReduxContext
): <TState = unknown, Selected = unknown>(
  selector: (state: TState) => Selected,
  equalityFn?: EqualityFn<Selected>
) => Selected {
}

export const useDispatch = /*#__PURE__*/ createDispatchHook()

export function createDispatchHook<
  S = unknown,
  A extends Action = AnyAction
  // @ts-ignore
>(context?: Context<ReactReduxContextValue<S, A>> = ReactReduxContext) {
  const useStore =
    // @ts-ignore
    context === ReactReduxContext ? useDefaultStore : createStoreHook(context)

  return function useDispatch<
    AppDispatch extends Dispatch<A> = Dispatch<A>
  >(): AppDispatch {
    const store = useStore()
    // @ts-ignore
    return store.dispatch
  }
}
```
[Provider 소스 링크](https://github.com/ZeroCho/ts-react/blob/master/react-redux-immer/client.tsx)
[훅 소스 링크](https://github.com/ZeroCho/ts-react/blob/master/react-redux-immer/App.tsx)

## Node의 타이핑

`<reference path="..."은 해당 파일의 타입들을 끌고 오는 것. 요즘 할 필요 없음
d.ts 파일에 declare module 'fs:promises'로 import 'fs:promises' 할 때 어떤 타입이 될 지 작성할 수 있음.

```typescript
function createServer(requestListener?: RequestListener): Server;
type RequestListener = (req: IncomingMessage, res: ServerResponse) => void;
```
  
```typescript
function readFile(path: PathLike | number, options: { encoding?: null; flag?: string; } | undefined | null, callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void): void;

function readFile(path: PathLike | FileHandle, options?: { encoding?: null, flag?: string | number } | null): Promise<Buffer>;
  
type PathLike = string | Buffer | URL;

function join(...paths: string[]): string;
```

## Express의 타이핑
```typescript
export = e;
declare function e(): core.Express;
declare namespace e {
    var json: typeof bodyParser.json;
    var urlencoded: typeof bodyParser.urlencoded;
}
  
interface RequestHandler<
    P = core.ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = core.Query,
    Locals extends Record<string, any> = Record<string, any>
> extends core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals> {}

import * as core from 'express-serve-static-core';
```
타입 확장을 위한 장치
```typescript
// This extracts the core definitions from express to prevent a circular dependency between express and serve-static
declare global {
    namespace Express {
        // These open interfaces may be extended in an application-specific manner via declaration merging.
        // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
        interface Request {}
        interface Response {}
        interface Application {}
    }
}
  
export interface Request<
    P = ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = ParsedQs,
    Locals extends Record<string, any> = Record<string, any>
> extends http.IncomingMessage,
        Express.Request {}

import { ParsedQs } from 'qs';

export {};

export type Query = ParsedQs;

export interface ParamsDictionary {
    [key: string]: string;
}
export interface RequestHandler<
    P = ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = ParsedQs,
    Locals extends Record<string, any> = Record<string, any>
> {
    // tslint:disable-next-line callable-types (This is extended from and can't extend from a type alias in ts<2.2)
    (
        req: Request<P, ResBody, ReqBody, ReqQuery, Locals>,
        res: Response<ResBody, Locals>,
        next: NextFunction,
    ): void;
}
  
export interface NextFunction {
    (err?: any): void;
    /**
     * "Break-out" of a router by calling {next('router')};
     * @see {https://expressjs.com/en/guide/using-middleware.html#middleware.router}
     */
    (deferToNext: 'router'): void;
    /**
     * "Break-out" of a route by calling {next('route')};
     * @see {https://expressjs.com/en/guide/using-middleware.html#middleware.application}
     */
    (deferToNext: 'route'): void;
}

export interface Express extends Application {
    request: Request;
    response: Response;
}
  
export interface Application<
    Locals extends Record<string, any> = Record<string, any>
> extends EventEmitter, IRouter, Express.Application {
  use: ApplicationRequestHandler<this>;
}
  
export type ApplicationRequestHandler<T> = IRouterHandler<T> &
    IRouterMatcher<T> &
    ((...handlers: RequestHandlerParams[]) => T);
  
export type RequestHandlerParams<
    P = ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = ParsedQs,
    Locals extends Record<string, any> = Record<string, any>
> =
    | RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>
    | ErrorRequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>
    | Array<RequestHandler<P> | ErrorRequestHandler<P>>;
  

```
passport 타이핑
```typescript
declare global {
    namespace Express {
        // tslint:disable-next-line:no-empty-interface
        interface AuthInfo {}
        // tslint:disable-next-line:no-empty-interface
        interface User {}

        interface Request {
            authInfo?: AuthInfo | undefined;
            user?: User | undefined;

            // These declarations are merged into express's Request type
            login(user: User, done: (err: any) => void): void;
            login(user: User, options: any, done: (err: any) => void): void;
            logIn(user: User, done: (err: any) => void): void;
            logIn(user: User, options: any, done: (err: any) => void): void;

            logout(options: { keepSessionInfo?: boolean }, done: (err: any) => void): void;
            logout(done: (err: any) => void): void;
            logOut(options: { keepSessionInfo?: boolean }, done: (err: any) => void): void;
            logOut(done: (err: any) => void): void;

            isAuthenticated(): this is AuthenticatedRequest;
            isUnauthenticated(): this is UnauthenticatedRequest;
        }

        interface AuthenticatedRequest extends Request {
            user: User;
        }

        interface UnauthenticatedRequest extends Request {
            user?: undefined;
        }
    }
}
```
  
passport-local 타이핑
```typescript
import { Strategy as PassportStrategy } from "passport-strategy";
import express = require("express");

interface IStrategyOptions {
    usernameField?: string | undefined;
    passwordField?: string | undefined;
    session?: boolean | undefined;
    passReqToCallback?: false | undefined;
}

interface IStrategyOptionsWithRequest {
    usernameField?: string | undefined;
    passwordField?: string | undefined;
    session?: boolean | undefined;
    passReqToCallback: true;
}

interface IVerifyOptions {
    message: string;
}

interface VerifyFunctionWithRequest {
    (
        req: express.Request,
        username: string,
        password: string,
        done: (error: any, user?: any, options?: IVerifyOptions) => void
    ): void;
}

interface VerifyFunction {
    (
        username: string,
        password: string,
        done: (error: any, user?: any, options?: IVerifyOptions) => void
    ): void;
}

declare class Strategy extends PassportStrategy {
    constructor(
        options: IStrategyOptionsWithRequest,
        verify: VerifyFunctionWithRequest
    );
    constructor(options: IStrategyOptions, verify: VerifyFunction);
    constructor(verify: VerifyFunction);

    name: string;
}
```

### d.ts 사용하기
- 그냥 일반 ts 파일에 타입 선언해도 됨
- BUT, import한 것과 인터페이스 이름이 겹치면 에러 발생
- 이럴 경우 d.ts로 분리(d.ts는 타입만 있고 구현은 없는 파일)
- 우선 declare global, declare module, declare namespace 없이 타이핑하기
- 확장하고 싶은 인터페이스가 저렇게 되어있다면 declare 추가
- 한 번 declare 쓴 블럭 안에서는 추가적으로 declare 필요 없음

## 직접 타이핑하기

types/모듈명.d.ts (꼭 types 폴더 안에 있을 필요는 없음)
```typescript
declare module "모듈명" {
  // import나 export 하나 필수
}
```
