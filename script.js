// 1
let age = 14
console.log(age)
// 2
let name = "Andrey"
console.log(name)
// 3
let isStudent = true;
console.log(isStudent)
// 4
const myString = "Простись с прошлым и начни с начала.";
console.log(myString);
// 5
const myNumber = 52;
let sum = myNumber + 10;
console.log(sum)
// 6
let myNull = null
console.log(myNull)
// 7
let UserName = prompt("What's your name?")
console.log(`Hello", ${UserName}`);
// 8
let isConfirmed = confirm("You confirm this?");
if (isConfirmed) {
  alert("Thank for accepting!");
} else {
  alert("Activity denied!");
}
// 9
const userAlertAnswer = alert("It can be dangerous")
const userAnswer2 = confirm("confirm")

if (userAnswer2 == true) {
    alert("Thank for accepting")
}
else {
    alert("Activity denied")
}