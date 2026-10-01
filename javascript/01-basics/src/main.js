// Variables using let
var _oldStyle = 5; // NEVER USE VAR IN YOUR CODE!
let _letNumber = 5; // a number
let _letFloat = 3.14; // a decimal (float)
let _letBoolean = true; // a boolean
let _letString = "Hello World!"; // a string
let _letArray = []; // an empty array
let _letObject = {}; // an empty object
let _letNull = null; // a null value
let _letUndefined = undefined; // an undefined value

// Variables using const
const _constNumber = 5; // a constant number
const _constFloat = 3.14; // a constant decimal (float)
const _constBoolean = true; // a const boolean
const _constString = "Hello World!"; // a const string
const _constArray = []; // an empty const array
const _constObject = {}; // an empty const object
const _constNull = null; // a const null value
const _constUndefined = undefined; // a const undefined value

/* STRINGS */

const firstName = "Bill";
const lastName = "Gates";
const fullName = "Your name is: " + firstName + " " + lastName; // the addition operator with strings means concatenation
const _fullNameTemplate = `Your name is: ${firstName} ${lastName}`; // this uses a template literal
const _firstNameUpper = firstName.toUpperCase();
const _firstNameLower = firstName.toLowerCase();
const _nameSplit = fullName.split(" "); // returns an array: ["Bill", "Gates"]

/* MATHEMATICAL OPERATORS */

let x = 5;
x = x + 5; // adds 5 to the existing variable value and replaces it with the result
x = x - 5; // subtracts 5 from the existing variable value and replaces it with the result
x = x * 5; // multiplies 5 to the existing variable value and replaces it with the result
x = x / 5; // divides 5 to the existing variable value and replaces it with the result
x = x % 5; // mods 5 to the existing variable value and replaces it with the result

// A better way to write the above code
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;

// If you need to increment or decrement by 1
x = x + 1; // don't do this!
x += 1; // better but not good enough
x++; // Perfect!

/* BOOLEAN OPERATORS */

const a = 6;
const b = 10;
const c = true;
const d = false;
a > b; // checks if a is greater than b
a < b; // checks if a is less than b
a >= b; // checks if a is greater than or equal to b
a <= b; // checks if a is less then or equal to b
a == b; // checks if a is equal to b; if types are different JavaScript will coerce the variables
a === b; // checks if a is equal to be and of the same type; no coercion
c & d; // checks c AND d
c && d; // checks c AND d, but uses short-circuit logic (i.e. if c is false, d is not checked)
c | d; // checks c OR d
c || d; // checks c OR d, but uses short-circuit logic (i.e. if c is true, d is not checked)

/* FUNCTIONS */

// A Pythagorean Theorem function that takes two arguments and returns a value
function pythagoreanTheorem1(a, b) {
  return Math.sqrt(a * a + b * b);
}

// The same function as above using arrow syntax
const pythagoreanTheorem2 = (a, b) => {
  return Math.sqrt(a * a + b * b);
};

// There are 3 common ways to return values in JavaScript
// 1. The traditional way (explicit return)
function _add1(a, b) {
  return a + b;
}

// 2. The implicit way (arrow functions only)
const _fn1 = (a, b) => a + b;

// 3. Implicit return of an object (parentheses are required)
const _fn2 = () => ({ key: "value" });


// Executing/calling the above functions and storing their results in variables
const _c1 = pythagoreanTheorem1(2, 1);
const _c2 = pythagoreanTheorem2(2, 1);

// A higher order function can take another function as an argument
const higherOrderFunction = (a, b, c) => {
  console.log(c(a, b));
};

higherOrderFunction(2, 1, pythagoreanTheorem2);

/* ARRAYS */

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // an array of integers
const array2 = [2, 4.3, "6", true, [1, 2, 3], {}]; // an array of mixed types
const _array3 = [...array1, ...array2]; // spreads the contents of array1 and array2 into a new array
const [_first, _second, _third, ..._rest] = array1; // destructures the 1st, 2nd and remaining values into variables called first, second and rest, respectively
const _length = array1.length; // determines the length (size) of array1
array1[0]; // gets the value at index 0 (first) from array1
array1[9]; // gets the value at index 9 (last) from array1
array1[0] = 10; // changes the value at index 0 of array1 to 10
array1[9] = 10; // changes the value at index 9 of array1 to 10


// the map function will loop through array1 and multiply all its values by 10; it returns a new array
const _map = array1.map((value) => {
  return 10 * value;
});

// the filter function will loop through array1 and only keep values that are even; it returns a new array
const _filter = array1.filter((value) => {
  return value % 2 === 0;
});


// the reduce function will loop through array1 and sum all the values with the sum starting at 10; it returns a new array
const _reduce = array1.reduce((prev, cur) => {
  return prev + cur;
}, 10);

array1.pop(); // removes the last value in the array and returns it
array1.push(10); // adds 10 to the end of the array
array1.shift(); // removes the first value in the array and returns it
array1.unshift(10); // adds 10 to the front of the array

/* OBJECTS */

// creates an object with specified key value pairs
const object1 = {
  age: 36,
  cars: ["KIA", "Honda"],
  company: "TDSB",
  isEvil: false,
  name: "Mr. Qayum",
  pythagoreanTheorem1: (a, b) => Math.sqrt(a * a + b * b),
  pythagoreanTheorem2(a, b) {
    return Math.sqrt(a * a + b * b);
  },
  pythagoreanTheorem3: (a, b) => {
    return Math.sqrt(a * a + b * b);
  },
  role: "Life Guide",
};

// creates another object with specified key value pairs
const object2 = {
  address: "2621 Midland Ave.",
  hair: "dark",
};

// spreads the contents of object1 and object2 into a new object
const object3 = {
  ...object1,
  ...object2,
};

// destructures the specified keys into variables called hair, role and cars, respectively
const { hair, role, cars } = object3;
console.log(hair, role, cars);

object1.age; // gets the value of the age key
object1.name = "Steve Jobs"; // changes the value of the name key to "Steve Jobs"
delete object1.name; // deletes the name key/value pair from the object
object1["age"]; // also gets the value of the age key using array-like syntax
object1["name"] = "Steve Jobs"; // also changes the value of the name key to "Steve Jobs"
delete object1["name"]; // also deletes the name key/value pair from the object

Object.keys(object1); // returns all the keys inside the object
Object.values(object1); // returns all the values inside the object
Object.entries(object1); // returns all the key/value pairs inside the object
Object.freeze(object1); // freezes the objects values from being changed

/* SETS */

const set1 = new Set(); // creates an empty set

set1.add(1);
set1.add(2);
set1.add(2); // duplicate values are ignored
set1.add("hello");

set1.has(1); // checks if value exists in the set (true)
set1.delete(1); // removes the value 1 from the set
set1.size; // returns the number of values in the set

// create a set from an array (duplicates removed automatically)
const set2 = new Set([1, 2, 3, 3, 4, 4, 5]);

// convert a set back into an array using the spread operator
const _uniqueArray = [...set2];

// loop through a set
for (const value of set2) {
  console.log(value);
}

// removes all values from the set
set2.clear();

/* MAPS */

const map1 = new Map(); // creates an empty map

map1.set("name", "Mr. Qayum");
map1.set("age", 36);
map1.set("company", "TDSB");

map1.get("name"); // returns "Mr. Qayum"
map1.has("age"); // checks if the key exists
map1.delete("age"); // removes the key/value pair

map1.size; // returns the number of key/value pairs

// keys and values can be any type
map1.set(1, "number key");
map1.set(true, "boolean key");

const objKey = { id: 1 };
map1.set(objKey, "object key");

// loop through a map
for (const [key, value] of map1) {
  console.log(`${key} => ${value}`);
}

// returns arrays of keys, values or entries
map1.keys();
map1.values();
map1.entries();

// removes all entries
map1.clear();

/* CONDITIONAL STATEMENTS */

let age = 18;
const citizen = true;
const height = 149;
const foods = ["hamburgers", "pizzas", "meatballs", "hot dogs"];

// the if-else statement is used for binary situations
if (age >= 18 && citizen && height >= 150) {
  console.log("You can vote!");
} else {
  console.log("You can not vote!");
}

// the ternary operator should be used instead of the if-else statement below
if (age % 2 === 0) {
  age *= 2;
} else {
  age /= 2;
}

age = age % 2 === 0 ? age * 2 : age / 2; // if age is even, multiply it by 2, otherwise, divide it by 2

// the else-if statement is used for non-binary situations
if (age < 18) {
  console.log("You don't know what you are doing!");
} else if (!citizen) {
  console.log("You don't live here!");
} else if (height < 150) {
  console.log("You need to drink milk!");
} else {
  console.log("You can vote!");
}

// the switch statement is preferred to the else-if statement when conditions have fixed values; it works with strings, numbers, decimals and many others
switch (foods[3]) {
  case "hamburgers":
    console.log("I love burgers!");
    break;
  case "pizzas":
    console.log("I love pineapple pizza!");
    break;
  case "meatballs":
    console.log("I love beef!");
    break;
  case "hot dogs":
    console.log("I love animals too much!");
    break;
  default:
    console.log("Invalid food!");
}

/* LOOP STATEMENTS */

let loop = 10;

// loops until the value of loop reaches 0; it checks the condition before first execution
while (loop > 0) {
  loop--;
}

// loops until the value of loop reaches 0,; it checks the condition after first execution
do {
  loop--;
} while (loop > 0);

// loops a finite number of times; the counter (i) starts at 4, increases by 2 each time and then stops when it reaches 10
for (let i = 4; i < 10; i += 2) {
  console.log(i);
}

// loops through the entire foods array
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

// a better way to loop through an array; use the for-of with arrays only
for (const food of foods) {
  console.log(food);
}

// another way to loop through an array using the array's built-in forEach function
foods.forEach((food, index) => {
  console.log(`At index=${index}, we have ${food}`);
});

// use the for-in with objects only
for (const item in object1) {
  console.log(`${item} has ${object1[item]}`);
}
