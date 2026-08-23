// 1
console.log("JS is running successfully");

// 2
window.alert("Ready to practice!");

// 3
var productName = "Laptop";
var price = 15000;
var isAvailable = true;

console.log(productName, typeof productName);
console.log(price, typeof price);
console.log(isAvailable, typeof isAvailable);

// 4
document.getElementById("mainTitle").innerText = "Practice Time";

// 5
var city = "Cairo";
var country = "Egypt";
var conc = "Location: " + city + " " + country;
console.log(conc);

// 6
console.log(`Location:+ ${city} ${country}`);

// 7
var itemPrice = 120;
var quantity = 3;
console.log(`total: ${quantity * itemPrice}`);
console.log(`remain: ${400 - quantity * itemPrice}`);
console.log(`prod: ${quantity * itemPrice}`);
console.log(`Div: ${itemPrice / quantity}`);
console.log(`mod: ${itemPrice % quantity}`);
console.log(`pow: ${quantity ** 2}`);

// 8
const color = window.prompt("what's your favorite color");
console.log(`your favorite color: ${color}`);

// 9
var score = 20;
var textScore = "20";
console.log(score == textScore);
console.log(score === textScore);
//  == ( equal ) is compare only the values of the variables
//  === ( strict equal ) is compare the value and the data type of the variables

// 10
var peices = window.prompt("how many peices ?");
console.log(+peices, typeof +peices);
console.log(Number(peices), typeof Number(peices));
console.log(parseInt(peices), parseInt(peices));

// 11
const fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);
fruits[1] = "orange";
fruits.push("graps");
console.log(fruits);

// 12
const course = {
  title: "back-end",
  hours: 15,
  levels: 3,
};
course.title = "front-end";
console.log(course.hours);
console.log(course);

// 13
const obj = {
  hasAccount: true,
  isVerified: false,
};
console.log(obj.hasAccount && obj.isVerified);
console.log(obj.hasAccount || obj.isVerified);
console.log(!obj.isVerified);

// 14
var balance = 50;
balance += 30;
balance *= 2;
balance -= 20;
console.log(balance);

// 15
const hotelName = window.prompt("hotel name:");
const nightsCount = window.prompt("number of nights:");
const confirmtion = window.prompt("is confirmed:");
console.log(`${hotelName},${nightsCount}${confirmtion}`);

// 16
console.log(2 + 8 + "0"); // 100
console.log("2" + 8 + 0); // 280
console.log(2 + "8" + 0); // 280

// 17
var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
console.log(city1, city2); // Alex Giza
// in the declration thr city2 = Alex but in the next line of code the alex2 was reassigned with Giza value
// so the value was Alex Giza

var car1 = { brand: "Toyota" };
var car2 = car1;
car2.brand = "Honda";
console.log(car1, car2);
// car1 and car2 poining to the same memory location that the object created at so any change in the value from
// car1 or car2 will afect on the whole object value

car2 = Object.assign({}, car1);
car1.brand = "Toyota";
car2.brand = "tt";
console.log(car1, car2);

// 18
const arr = ["str", 1, true, null, [], {}, undefined];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
console.log(typeof arr[3]);
console.log(typeof arr[4]);
console.log(typeof arr[5]);
console.log(typeof arr[6]);

// this is a bug in js interpreter were the type tag of each datatype in js
// stored in the first bits of memory so the object type were presented as 000 also the null type 000

// 19
const clientName = window.prompt("client name:");
const priceCount = window.prompt("price:");
const paid = window.prompt("is paid:");
const msg = `${clientName}::${nightsCount}::${confirmtion}`;
console.log(msg);
alert(msg);
document.getElementById("result").innerText = msg;

// 20
var first = Number(window.prompt("insert 1st numner"));
var second = Number(window.prompt("insert 2nd numner"));

console.log("pow: ", first ** second);
console.log("mod: ", first % second);
console.log("div: ", first / second);
console.log("prod: ", first * second);
console.log("diff: ", first - second);
console.log("sum: ", first + second);

// 21
var a = 40;
var b = 50;
var c = 60; // "60";
var d = 30;
var e = 30;
console.log(a + b + c + d + e);
// the c variable was the wrong type so the result of the equation was returnning the summuntion values before
// concat with the c ( strign ) then contian concating with the rest of the variables

// 22
function MakeInvoiceLine(item, qty, paid) {
  return `Item: ${item} | Qty: ${qty} | paid: ${paid}`;
}
const Qty = prompt("Qty");
const item = prompt("item");
const newpaid = prompt("newpaid");
document.getElementById("function").innerText = MakeInvoiceLine(
  item,
  Qty,
  newpaid,
);

// 23

// function saveUserInfo(name) {
//   if (!name) window.alert('name is required');
// }


// 24
var a = "15";
console.log(a, typeof a, a == 15, a === 15);
var b = 15;
console.log(b, typeof b, b == 15, b === 15);

var c = null;
console.log(c, typeof c, c == 15, c === 15);

var d;
console.log(d, typeof d, d == 15, d === 15);

var e = [15];
console.log(e[0], typeof e[0], e[0] == 15, e[0] === 15);

var f = { value: 15 };
console.log(f, typeof f, f.value == 15, f.value === 15);

// 25
let category = window.prompt("type category");
let newPrice = window.prompt("price");
let brand = window.prompt("brand");
let newProductName = window.prompt("newProductName");
let inStock = window.prompt("is product in the stock");
newPrice = Number(newPrice);
const productInfo = {
  category,
  price,
  brand,
  newProductName,
  inStock,
};

const newMsg = `name: ${productInfo.newProductName}, category: ${productInfo.category}, brand: ${productInfo.brand},price: ${productInfo.price},inStock: ${productInfo.inStock}`;
window.getElementById("product cart").innerText = newMsg;
console.log(newMsg);
window.alert(msg);
