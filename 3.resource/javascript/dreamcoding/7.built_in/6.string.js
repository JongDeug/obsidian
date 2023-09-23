const textObj = new String("Hello World!");
const text = "Hello World!";
console.log(textObj);
console.log(text);
console.log(textObj.length);
console.log(text.length);

console.log(text[0]);
console.log(text.charAt(2));

console.log(text.indexOf("l"));
console.log(text.lastIndexOf("l"));

console.log(text.includes("tx"));
console.log(text.includes("H"));
console.log(text.includes("h"));

console.log(text.startsWith("He"));
console.log(text.endsWith("d!"));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0,10));
console.log(text.slice(2)); // slice(start?, end?) (?는 optional)     2'부터' end까지
console.log(text.slice(-2)); // -2 즉 d부터 end까지 슬라이스. 
console.log(text.slice(0,10)); //substring()이랑 똑같은 효과  10은 포함 x 9까지

const space = "           space          ";
console.log(space.trim());

const longText = "Get to the, point";
console.log(longText.split(' '));
console.log(longText.split(' ', 2));
console.log(longText.split(', '));