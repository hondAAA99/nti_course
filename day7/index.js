console.log("--- Part A ---");

function assignGlobal() {
  undeclaredVar = "no strict";
}
assignGlobal();
console.log(undeclaredVar);

function assignStrict() {
  "use strict";
  try {
    undeclaredVar2 = "strict test";
  } catch (err) {
    console.log(err.message);
  }
}
assignStrict();

function deleteTest() {
  "use strict";
  var localVar = "test";
  try {
    delete localVar;
  } catch (err) {
    console.log(err.message);
  }
  const obj = { prop: 1 };
  delete obj.prop;
  console.log(obj);
}
deleteTest();

console.log("--- Part B ---");

console.log(x);
var x = 10;
console.log(x);

function sayHi() {
  console.log("Hi");
}
sayHi();

try {
  sayBye();
} catch (err) {
  console.log(err.message);
}
var sayBye = function () {
  console.log("Bye");
};

console.log(a);
let a = 5;

var n = 1;
function demo() {
  console.log(n);
  var n = 2;
  console.log(n);
}
demo();
console.log(n);

console.log("--- Part C ---");

function testVarScope() {
  if (true) {
    var scoped = 5;
  }
  console.log(scoped);
}
testVarScope();

function testLetScope() {
  if (true) {
    let scoped = 5;
  }
  try {
    console.log(scoped);
  } catch (err) {
    console.log(err.message);
  }
}
testLetScope();

var redeclareVar = 1;
var redeclareVar = 2;
console.log(redeclareVar);

try {
  eval("let redeclareLet = 1; let redeclareLet = 2;");
} catch (err) {
  console.log(err.message);
}

const student = { name: "Ali", age: 20, city: "Cairo" };
student.age = 21;
console.log(student);
student.grade = "A";
console.log(student);
delete student.city;
console.log(student);
try {
  student = { name: "New" };
} catch (err) {
  console.log(err.message);
}

const nums = [1, 2, 3];
nums.push(4);
console.log(nums);
nums[0] = 100;
console.log(nums);
try {
  nums = [9, 9, 9];
} catch (err) {
  console.log(err.message);
}

var validA;
let validB;
try {
  eval("const validC;");
} catch (err) {
  console.log(err.message);
}

var g1 = "var global";
let g2 = "let global";
const g3 = "const global";
console.log(typeof window !== "undefined" ? window.g1 : "no window in node");
console.log(typeof window !== "undefined" ? window.g2 : "no window in node");
console.log(typeof window !== "undefined" ? window.g3 : "no window in node");

const handlers = {};
for (var i = 0; i < 3; i++) {
  handlers["fn" + i] = function () {
    return "index: " + i;
  };
}
console.log(handlers.fn0());
console.log(handlers.fn2());

console.log("--- Part D ---");

const welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Mohanad"));

const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
console.log(fullInfo("Ali", "Hassan", 25));

const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

const printAndSum = (a, b) => {
  console.log(a, b);
  return a + b;
};
console.log(printAndSum(4, 5));

console.log("--- Part E ---");

const product = {
  title: "Laptop",
  price: 15000,
  inStock: true,
  brand: "Dell",
};
const { title, price, inStock } = product;
console.log(title, price, inStock);

const [firstSkill, secondSkill] = ["HTML", "CSS", "JS", "React"];
console.log(firstSkill, secondSkill);

function greet(name = "Guest", message = "Hello") {
  return `${message}, ${name}!`;
}
console.log(greet("Mohanad", "Hi"));
console.log(greet("Mohanad"));
console.log(greet());

function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

const merged = [...[1, 2], ...[3, 4, 5]];
console.log(merged);

const originalArr = [10, 20, 30];
const copiedArr = [...originalArr];
copiedArr.push(40);
console.log(originalArr);
console.log(copiedArr);

const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };
const mergedUser = { ...user, ...contact };
console.log(mergedUser);

const values = [2, 4, 6, 8];
function total(a, b, c, d) {
  return a + b + c + d;
}
console.log(total(...values));

console.log("--- Part F ---");

let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;
person2.name = "Omar";
console.log(person1.name);

const original = {
  name: "Mona",
  details: { city: "Cairo" },
};
const shallowCopy = { ...original };
shallowCopy.name = "Sara";
shallowCopy.details.city = "Alex";
console.log(original);
console.log(shallowCopy);

const deepCopy = structuredClone(original);
deepCopy.details.city = "Giza";
console.log(original.details.city);
console.log(deepCopy.details.city);

const userData = { name: "Ahmed", age: 26, city: "Alex" };
if (typeof localStorage !== "undefined") {
  localStorage.setItem("userdata", JSON.stringify(userData));
  const raw = localStorage.getItem("userdata");
  const parsed = JSON.parse(raw);
  console.log(typeof parsed);
  console.log(parsed);
  localStorage.removeItem("userdata");
} else {
  console.log("localStorage not available in this environment");
}

console.log("--- Part G ---");

const APP_CONFIG = {
  name: "MyApp",
  version: "1.0.0",
  api: {
    baseUrl: "https://api.myapp.com",
    timeout: 5000,
  },
  features: [],
};
APP_CONFIG.api.timeout = 8000;
APP_CONFIG.features.push("darkMode");
console.log(APP_CONFIG);
try {
  APP_CONFIG = {};
} catch (err) {
  console.log(err.message);
}

function createCard(title, price = 0, ...tags) {
  return {
    title,
    price,
    tags,
    label: `${title} - ${price} EGP`,
  };
}
console.log(createCard("Laptop", 15000, "electronics", "sale"));
console.log(createCard("Mouse"));

const students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 },
];
students.forEach(({ name, grade }) => {
  console.log(`${name} scored ${grade}`);
});
