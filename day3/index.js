var fullName = "Ahmed Ali";
console.log(fullName.length);

var sentence = "I am learning JavaScript";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

var email = "student@nti.com";
console.log(email.includes("@"));

var word = "JavaScript";
console.log(word[0]);
console.log(word[word.length - 1]);

var text = "This is a bad day";
console.log(text.replace("bad", "good"));

var coding = "I love coding";
var words = coding.split(" ");
console.log(words.join("-"));

var training = " nti egypt training ";
var cleaned = training.trim().toUpperCase().replace("EGYPT", "CAIRO");
console.log(cleaned);

var numStr = "45.8";
console.log(Number(numStr));

var num = 7.6;
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

var numbers = [12, 5, 28, 9];
console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));

var randomInt = Math.floor(Math.random() * 20) + 1;
console.log(randomInt);

var price = 19.4567;
console.log(price.toFixed(2));

var randoms = [];
for (var i = 0; i < 5; i++) {
  randoms.push(Math.floor(Math.random() * 50) + 1);
}
var maxR = Math.max.apply(null, randoms);
var minR = Math.min.apply(null, randoms);
var avgR = randoms.reduce(function (a, b) { return a + b; }, 0) / randoms.length;
console.log(maxR);
console.log(minR);
console.log(avgR.toFixed(2));

for (var i = 1; i <= 20; i++) {
  console.log(i);
}

for (var i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

var n = 10;
while (n >= 1) {
  console.log(n);
  n--;
}

var names = ["Sara", "Omar", "Mona", "Youssef"];
for (var name of names) {
  console.log(name);
}

for (var i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 3; j++) {
    console.log(i + " * " + j + " = " + (i * j));
  }
}

for (var i = 1; i <= 30; i++) {
  if (i === 25) {
    break;
  }
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

var hello = "HELLO";
for (var i = 0; i < hello.length; i++) {
  console.log(hello[i]);
}

var arr = [10, 20, 30, 40];
var total = 0;
for (var i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total);

var sentence2 = "JavaScript is amazing and awesome";
var count = 0;
for (var i = 0; i < sentence2.length; i++) {
  var ch = sentence2[i].toLowerCase();
  if (ch === "a") {
    count++;
  }
}
console.log(count);

var grades = [70, 85, 92, 60, 77, 88];
for (var i = 0; i < grades.length; i++) {
  if (grades[i] % 2 === 0) {
    console.log(grades[i]);
  }
}

for (var i = 1; i <= 4; i++) {
  var line = "";
  for (var j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}

var students = ["ahmed", "sara", "omar", "laila", "hassan"];
var matched = 0;
for (var i = 0; i < students.length; i++) {
  var upper = students[i].toUpperCase();
  if (upper[0] === "A" || upper[0] === "S") {
    console.log(upper);
    matched++;
  }
}
console.log(matched);