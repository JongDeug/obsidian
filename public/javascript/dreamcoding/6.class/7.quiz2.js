// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자.
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// 내가 만든건데 부모클래스와 자식클래스가 다른 점이 hourlyWage, salary 변수라고 생각해서 밑으로 뺐는데,, 이렇게 하면 코드가 중복되니까
// 부모에서 모든걸 총괄하고 자식에서 다른 값을 넣어주는 식으로 가는게 더 좋을듯함. 밑에 선생님 코드 작성해놨음!
// 코드 개선할 점 : 부모는 공통된 속성을 가지고 있고, 자식은 공통되지만 다른 속성을 가지고 있으므로 자식의 생성자로 공통된 것(부모)만 초기화 -> 
// -> super로 공통된 것 + 자식의 고유한 속성까지 같이 초기화 하면됨.
class Staff { 
    #name;
    #department;
    #workingTimeThisMonth;

    constructor(name, department, workingTimeThisMonth){
        this.#name = name;
        this.#department = department;
        this.#workingTimeThisMonth = workingTimeThisMonth;
    }

    printInformation(){
        console.log(
            `이름 : ${this.#name} \n부서 : ${this.#department} \n이번 달 근무 시간 : ${this.#workingTimeThisMonth}`
        );
    }

    get workingTimeThisMonth(){
        return this.#workingTimeThisMonth;
    }
}

class FullTimeStaff extends Staff{
    #hourlyWage = 10000;
    #salary;
    constructor(name, department, workingTimeThisMonth){
        super(name, department, workingTimeThisMonth);
        this.#salary = super.workingTimeThisMonth * this.#hourlyWage;
    }

    calculateSalary(){
        console.log(`이번 달 월급 : ${this.#salary}\n`);
    }
}

class PartTimeStaff extends Staff{
    #hourlyWage = 8000;
    #salary;
    constructor(name, department, workingTimeThisMonth){
        super(name, department, workingTimeThisMonth);
        this.#salary = super.workingTimeThisMonth * this.#hourlyWage;
    }

    calculateSalary(){
        console.log(`이번 달 월급 : ${this.#salary}\n`);
    }
}


const jongHwan = new FullTimeStaff("김종환", "개발부서", "100");
jongHwan.printInformation();
jongHwan.calculateSalary();

const jack = new PartTimeStaff("Jack", "마케팅", "50");
jack.printInformation();
jack.calculateSalary();

// 슨상님이 짠 코드 크,,,
class Employee {
    #name;
    #department;
    #hoursPerMonth;
    #payRate;
    constructor(name, department, hoursPerMonth, payRate){
        this.#name = name;
        this.#department = department;
        this.#hoursPerMonth = hoursPerMonth;
        this.#payRate = payRate;
    }

    calculatePay(){
        const salary = this.#hoursPerMonth * this.#payRate;
        console.log(`월급 : ${salary}`);
    }
}

class FullTimeEmployee extends Employee{ 
    static #PAY_RATE = 10000; 
    constructor(name, department, hoursPerMonth){
        super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE);
    }
}

class PartTimeEmployee extends Employee{
    static #PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth){
        super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
    }
}

const jong = new FullTimeEmployee("종환", "s/w", 100);
const bob = new PartTimeEmployee("잭", "s/w", 50);
jong.calculatePay();
bob.calculatePay();