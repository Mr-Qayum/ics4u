let x = 11;
let y = 6;

x = x + 2; // also exist for -, *, / and %
x *= 2;  // also exist for -, *, / and %
x++; // only for incrememnts of 1; also has ++x, x-- and --x

let firstName = "Bill";
let lastName = "Gates";
let fullName = `${firstName} ${lastName}`;

// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
// console.log(fullName.split(" "));
// console.log(fullName.includes("Bill"));

function pythagoreanTheorem1(a, b) {
  return Math.sqrt(a * a + b * b);
}

const pythagoreanTheorem2 = (a, b) => {
  return Math.sqrt(a * a + b * b);
}

let c1 = pythagoreanTheorem1(2, 1);
let c2 = pythagoreanTheorem2(2, 1);

// Arrays
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [2, 4, 6, 8, 10];
let array3 = [...array1, ...array2];

let map = array1.map((value) => {
  return 10 * value;
});

let filter = array1.filter((value) => {
  return value % 2 === 0;
});

let reduce = array1.reduce((prev, cur) => {
  return prev + cur;
}, 10);

// let interval = setInterval(() => {
//   console.log("Hello class again!")
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 10000);

let [first, second, ...rest] = array1;

// console.log(first);
// console.log(second);
// console.log(rest);

array1.pop();
array1.push(10);
array1.shift();
array1.unshift(10);

// Objects
let object1 = {
  name: "Bill Gates",
  age: 71,
  company: "Microsoft",
  role: "CEO",
  isEvil: true,
  cars: ["BMW", "Ferrari", "Audi"],
};

let object2 = {
  address: "99 Rich Blvd.",
  hair: "white",
}

let object3 = {
  ...object1,
  ...object2,
}

let { hair, role, cars } = object3;
// let hair = object3.hair;
// let role = object3.role;

// console.log(hair, role, cars);
// console.log(object1.name);
// console.log(object1["name"]);

// console.log(Object.keys(object1));
// console.log(Object.values(object1));
Object.freeze(object1);
object1.name = "Steve Jobs"
// Object.entries(object1)
//   .forEach(([key, value]) => {
//     console.log(`key = ${key}, value = ${value}`);
//   });

// Conditional Statements

let age = 18;
let citizen = true;
let height = 149;

// if-else
// if (age >= 18 && citizen && height >= 150) {
//   console.log("You can vote!");
// } else {
//   console.log("You can not vote!");
// }

// else-if
// if (age < 18) {
//   console.log("You don't know what you are doing!");
// } else if (!citizen) {
//   console.log("You don't live here!");
// } else if (height < 150) {
//   console.log("You need to drink milk!")
// } else {
//   console.log("You can vote!");
// }

// switch (works with strings, numbers, decimals and many others)
let foods = ["hamburgers", "pizzas", "meatballs", "hot dogs"]

// switch (foods[4]) {
//   case "hamburgers":
//     console.log("I love burgers!");
//     break;
//   case "pizzas":
//     console.log("I love pinapple pizza!");
//     break;
//   case "meatballs":
//     console.log("I love beef!");
//     break;
//   case "hot dogs":
//     console.log("I love animals too much!");
//     break;
//   default:
//     console.log("Invalid food!");
// }

// ternary operator
// let num = 10;

// if (num % 2 == 0) {
//   num *= 2;
// } else {
//   num /= 2;
// }

// num = num % 2 == 0 ? num * 2 : num / 2;

//console.log(num);

// Loops
let loop = 10;

// while (loop > 0) {
//   console.log(loop);
//   loop--;
// }

// do {
//   console.log(loop);
//   loop--;
// } while (loop > 0);

// for (let i = 4; i < 10; i += 2) {
//   console.log(i)
// }

// for (let i = 0; i < foods.length; i += 2) {
//   console.log(foods[i]);
// }

// Use a for-of only with arrays
// for (const food of foods) {
//   console.log(food);
// }

// Use a for-in only with objects
// for (const item in object1) {
//   console.log(`${item} has ${object1[item]}`);
// }

// foods.forEach((food, index) => {
//   console.log(`At index=${index}, we have ${food}`);
// })

