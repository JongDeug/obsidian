# 드림코딩 자바스크립트 문법 정리

https://academy.dream-coding.com/

# 자주 까먹는 문법

화살표 함수는 ES6의 새로운 문법.

ES5의 this의 특징으로
1. 함수 실행 시에는 globalThis를 가리킨다.
2. 객체의 메소드 실행 시에는 메소드를 소유하고 있는 객체를 가리킨다.
3. 생성자 실행 시에는 새롭게 만들어진 객체를 가리킨다.


!!ES6에 화살표 함수라는 문법이 새롭게 등장함.

ES6 화살표 함수 특징으로
자신을 둘러싸고 있는 상위 환경의 this를 그대로 계승하는 
Lexical this를 따른다. 

```
var obj = {
	value: 10,
	show: function () {
		console.log(this.value); // 10
		
		// 그냥 함수
		function show_01(){
			console.log(this.value); // undefined
		}
		show_01();

		// 화살표 함수
		function show_02 = () => {
			console.log(this.value); // 10	
		}
		show_02();
	}
}
obj.show();

```
