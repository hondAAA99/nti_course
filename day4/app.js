// 1
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "white",
};
console.log("car1:", car);

// 2
console.log("brand:", car.brand);
console.log("year:", car["year"]);

// 3
car.color = "black";
car.price = 25000;
console.log("car3", car);

// 4
delete car.year;
console.log("car.year:", car.year);
// Explanation: car.year is now undefined because the year
// property no longer exists on the object.

// 5
const student = {
  "stu-name": "Sara",
  age: 20,
};
console.log("student name:", student["stu-name"]);

// 6
const book = {
  title: "Clean Code",
  author: {
    firstName: "Robert",
    lastName: "Martin",
  },
};
console.log("lastname:", book.author.lastName);

// 7
const person = { name: "Ali", age: 25, city: "Cairo" };
console.log("keys:", Object.keys(person));
console.log("values:", Object.values(person));
console.log("has 'job':", person.hasOwnProperty("job"));

// 8
const settings = { theme: "dark", lang: "en" };
Object.freeze(settings);
settings.theme = "light";
settings.fontSize = 16;
console.log("Task 8:", settings);
// Object.freeze() makes the object immutable.

// 9.
const cities = ["Cairo", "Giza", "Alexandria", "Luxor", "Aswan"];
console.log("cities:", cities);
console.log("length:", cities.length);

// 10
console.log("first:", cities[0]);
console.log("second:", cities[1]);
console.log("last:", cities[cities.length - 1]);

// 11
cities.push("Sohag");
console.log("after push:", cities);
cities.unshift("Mansoura");
console.log("after unshift:", cities);

// 12.
cities.pop();
console.log("after pop:", cities);
cities.shift();
console.log("after shift:", cities);

// 13
const techList = ["HTML", "CSS", "JS", "React"];
console.log("index of 'JS':", techList.indexOf("JS"));
console.log("includes 'Python':", techList.includes("Python"));

// 14.
const items = ["pen", "book", "bag"];
items.forEach((item, index) => {
  console.log(`index ${index}: ${item}`);
});

// 15.
const colors = ["red", "green", "blue", "yellow"];
for (const color of colors) {
  if (color === "blue") break;
  console.log("color:", color);
}

// 16.
let letters = ["A", "B", "C"];
letters.push("D", "E");
letters.shift();
console.log("final array:", letters);
console.log("length:", letters.length);

// 17.
const fruits = ["apple", "banana", "cherry"];
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("new array:", upperFruits);
console.log("original array:", fruits);

// 18. filter numbers > 50
const numbers = [10, 55, 30, 80, 45, 90];
const bigNumbers = numbers.filter((n) => n > 50);
console.log("numbers > 50:", bigNumbers);

// 19. find / findIndex
const egyptCities = ["Cairo", "Giza", "Alex", "Aswan"];
const foundCity = egyptCities.find((city) => city.startsWith("A"));
const foundIndex = egyptCities.findIndex((city) => city.startsWith("A"));
console.log("first city starting with A:", foundCity);
console.log("its index:", foundIndex);

// 20
const letterArr = ["a", "b", "c", "d", "e"];
const slicedArr = letterArr.slice(1, 4);
console.log("sliced copy:", slicedArr);
console.log("original array:", letterArr);

// 21.
const numberWords = ["one", "two", "three", "four", "five"];
const removedItems = numberWords.splice(1, 2);
console.log("removed items:", removedItems);
console.log("array after splice:", numberWords);

// 22
const unsortedNumbers = [40, 100, 1, 5, 25];
const sortedNumbers = [...unsortedNumbers].sort((a, b) => a - b);
console.log("sorted numbers:", sortedNumbers);

// 23
const ages = [16, 21, 17, 19];
const someAdult = ages.some((age) => age >= 18);
const allAdult = ages.every((age) => age >= 18);
console.log("some", someAdult);
console.log("every", allAdult);

// 24
const valuesToSum = [5, 10, 15, 20];
const total = valuesToSum.reduce((sum, current) => sum + current, 0);
console.log("", total);

// 25
const students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 },
];
for (const s of students) {
  console.log(`${s.name}: ${s.grade}`);
}

// 26
const topStudentNames = students
  .filter((s) => s.grade >= 80)
  .map((s) => s.name);
console.log("top stu names:", topStudentNames);

// 27
const products = [
  { name: "Keyboard", price: 300 },
  { name: "Mouse", price: 150 },
  { name: "Monitor", price: 2500 },
];
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("total price:", totalPrice);

// 28.
const techArr = ["js", "html", "css", "js", "react", "js"];
const jsCount = techArr.filter((tech) => tech === "js").length;
console.log("'js' appears:", jsCount, "times");

// 29. classroom object
const classroom = {
  teacher: "Mr. Ahmed",
  students: ["Omar", "Mona", "Ali", "Sara"],
};
console.log("teacher:", classroom.teacher);
console.log("number of students:", classroom.students.length);
console.log("last stu:", classroom.students[classroom.students.length - 1]);

// 30
const productList = [
  { id: 1, title: "Pen", price: 10 },
  { id: 2, title: "Book", price: 50 },
  { id: 3, title: "Bag", price: 25 },
];
const upperTitles = productList.map((p) => p.title.toUpperCase());
const cheapProducts = productList.filter((p) => p.price < 30);
const totalAllPrices = productList.reduce((sum, p) => sum + p.price, 0);
console.log("uppercase titl:", upperTitles);
console.log("cheap pro:", cheapProducts);
console.log("total of all pri", totalAllPrices);
