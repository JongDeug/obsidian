// 조건문 Conditional Statement
// switch
// if else if else if else if ... else
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우

// 신박한거
let condition = "okay"; // okay, good => 좋음!, bad => 나쁨!
let text;
switch (condition) {
    case "okay":
    case "good":
        text = "좋음!";
        break;
    case "bad":
        text = "나쁨!";
}
console.log(text);






// 원래 알았던거
let day = 9; // 0:monday, 1:tuesday... 6: sunday
let dayName;
switch (day) {
    case 0:
        dayName = "Monday";
        break;
    case 1:
        dayName = "Tuesday";
        break;
    case 2:
        dayName = "Wednesday";
        break;
    case 3:
        dayName = "Thursday";
        break;
    case 4:
        dayName = "Friday";
        break;
    case 5:
        dayName = "Saturday";
        break;
    case 6:
        dayName = "Sunday";
        break;
    default:
        console.log("해당하는 요일이 없음!");
}
console.log(dayName);
