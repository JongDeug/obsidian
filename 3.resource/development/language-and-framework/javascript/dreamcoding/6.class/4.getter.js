// 접근자 프로퍼티 (Accessor Property) : 프로퍼티에 접근할 수 있는거다.
// 프로퍼티? 일부 객체 지향 프로그래밍 언어에서 필드와 메소드 간 기능의 중간인 클래스 멤버의 특수한 유형이다.
// 프로퍼티의 읽기와 쓰기는 일반적으로 게터와 세터 메소드 호출로 변환된다.
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value){
        console.log('set', value);
    }
}


const student = new Student("종환", "김");
console.log(student.fullName);
// student.fullName(1); 이렇게 사용하면 오류나네?
student.fullName = "김철수";
