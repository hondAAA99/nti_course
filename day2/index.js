// 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log(i);
}
// 3
let total = 0;
for (let i = 1; i <= 15; i++) {
  total += i;
}
console.log(total);

// 4
let cnt = 1;
while (cnt <= 7) {
  console.log(cnt);
  cnt++;
}

// 5
let game = 1;
while (game--) {
  console.log(game);
}

// 6
let once = 1;
do {
  for (let e = 1; e <= 5; e++) {
    console.log(e);
  }
} while (--once);

// 7
var itemsInCart = 10;
while (itemsInCart > 5) {
  console.log("start shoping");
}

do {
  console.log("start shoping");
} while (itemsInCart > 5);

// while check condetion before start the code block
// do while excute the code block then check the condetion

// 8
var userName = "Ali";
var userAge = 22;
var isStudent = true;
console.log(userName, typeof userName);
console.log(userAge, typeof userAge);
console.log(isStudent, typeof isStudent);

// 9
var dbPrice = 10;
var inputPrice = "10";
console.log(dbPrice == inputPrice);
console.log(dbPrice === inputPrice);

// 1st log check the value only without type checking
// 2nd log check value and type of the variables

// 10
var name = window.prompt("insert your name");
console.log(`Welcome, ${name}`);

// 11
const qtys = window.prompt("please insert product quantitiy");
console.log(+qtys, typeof +qtys);
console.log(parseInt(qtys), typeof parseInt(qtys));
console.log(Number(qtys), typeof Number(qtys));

// 12
let a = 10,
  b = 3;
console.log("sum:", a + b);
console.log("minu:", a - b);
console.log("prod:", a * b);
console.log("mult:", a / b);
console.log("pow:", a ** b);

// 13
const age = window.prompt("what's ypur age ?");
if (age >= 18) {
  window.alert("you can enter");
} else {
  window.alert("Sorry, underage");
}

// 14
const grade = window.prompt("type the grade:");
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// 15
const adultOrChile = window.prompt("type the age:");
adultOrChile >= 18 ? console.log("Adult") : console.log("Minor");

// 16
const dat = window.prompt("type day name:");
switch (day) {
  case "saterday":
    window.alert("sat");
    break;
  case "sunday":
    window.alert("sun");
    break;
  case "wedensday":
    window.alert("weds");
    break;
  default:
    window.alert("weekEnd");
}

// 17
const coast = window.prompt("coast :");

for (let e = 1; i <= 10; e++) {
  console.log(`${e} x ${coast} = ${e * coast} `);
}

// 18

const num = window.prompt("type file size:");
if (num > 0) {
  for (let i = 0; i <= num; i++) {
    console.log("i");
  }
} else {
  console.log("invalid file size");
}

// 19
const transOne = window.prompt("type start number");
const transTwo = window.prompt("type end number");
for (let i = transOne; transTwo >= i; i++) {
  if (i % 2 == 0) {
    console.log("express");
  } else {
    console.log("normal");
  }
}

// 20
let studs = ["ahm", "sara", "karim", "wala"];
for (let e = 0; e < studs.length; e++) {
  console.log(`Student ${e + 1}: ${studs[e]}`);
}

// 21
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += window.prompt(`day ${i}`);
}
console.log("sum:", sum);
console.log("avg:", sum / 5);

// 22

let PIN = 0;
const correct = 1234;
while (PIN++) {
  let pin = window.prompt("PIN: ");
  if (PIN > 3) {
    window.alert("you are not allowed to access");
    break;
  } else if (pin == correct) {
    window.alert("you are allowed to access");
    break;
  } else {
    window.alert("please re-enter the pin");
  }
}

// 23
var hasAccount = true;
var isVerified = false;
console.log(hasAccount || isVerified);
console.log(hasAccount && isVerified);
console.log(hasAccount != isVerified);
if (hasAccount || isVerified) {
  window.alert("Please verify your account");
} else if (hasAccount && isVerified) {
  window.alert("Welcome back");
} else {
  window.alert("Please sign up");
}

// 24
var aa = 40;
var bb = 50;
var c = 60; // "60";
var d = 30;
var e = 30;
var summu = aa + bb + c + d + e;
if (summu <= 20) {
  for (let e = 1; e <= summu; e++) {
    console.log(e);
  }
} else {
  console.log("Too big to print line by Line");
}

// 25
const n = Number(prompt("please write a number for the factorial"));
if (n < 0) {
  console.log("error");
}
if (isNaN(n)) {
  console.log("error");
}

let result = 1;
for (let i = 2; i < n; i++) {
  result *= i;
}

const message = `${n}! = ${result}`;
console.log(message);
