const date01 = new Date(2021, 7, 14, 10, 0, 0, 0); // 14 de agosto de 2021

console.log(date01);

const date02 = new Date("2021-08-14"); // 14 de agosto de 2021

console.log(date02);

const date03 = new Date("2021-08-14T12:15:30"); // 14 de agosto de 2021

console.log(date03);

console.log(date03.getFullYear());
console.log(date03.getMonth());
console.log(date03.getDate());
console.log(date03.getDay());
console.log(date03.getHours());
console.log(date03.getMinutes());
console.log(date03.getSeconds());

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

const currentDay = new Date();

currentDay.setDate(2);
currentDay.setFullYear(2);
currentDay.setMonth(2);
currentDay.setSeconds(2);
currentDay.setMilliseconds(2);
currentDay.setHours(2);

console.log(currentDay);

const diffDate = currentDay - date01;
const diffDateOnDays = (diffDate / DAY_IN_MILLISECONDS).toFixed(0);

console.log(diffDateOnDays);

console.log("---------------------------------------");
console.log(date01.toLocaleDateString());
console.log(date01.toLocaleTimeString());
console.log(date01.toLocaleString());
console.log("---------------------------------------");
console.log(date01.toLocaleDateString("en-US"));
console.log(date01.toLocaleTimeString("en-US"));
console.log(date01.toLocaleString("en-US"));