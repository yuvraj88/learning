const hello = () => {
  console.log("Print Function 111");
};

// hello();

const sum = (a = 0, b = 0) => {
  // default argument
  return a + b;
};

// console.log(sum(100, 200)); // NaN = Not A Number

// Destructing

let [a, b, c] = [1, 2, 3]; // array

//object

let myNames = {
  firstName: "Yuvraj",
  lastName: "Singh",
};
const { firstName, lastName } = myNames;
// console.log(firstName);

// Spread Operator
// returns new array iterate
// ... three dots

let array1 = [2, 3];
let array2 = [1, 4, 6, ...array1];

// console.log(array2);

const myName = {
  firstName: "Yuvraj1",
  lastName: "Singh4",
};
const myName2 = {
  firstName1: "Yuvraj2",
  lastName2: "Singh3",
};
const fullName = { ...myName, ...myName2, surName: "Chouhan", age: 32 };
// console.log(fullName);

// Rest operator Collects all remaining elements into an array

// ...

subtract = (a, b, ...myRestValues) => {
  console.log(myRestValues);
  return a - b;
};

// console.log(subtract(10, 5, 100, 200, 1000, 111));

//Concat an Array

const arr1 = ["coffee", "tea", "milk"];
const arr2 = ["juice", "smoothie"];

let newDrink = arr1.concat(arr2); //using concat
// console.log(newDrink);

console.log([...arr1, ...arr2]);

//

const beverages = [
  "coffee",
  "tea",
  "milk",
  "juice",
  "milk",
  "juice",
  "smoothie",
];
console.log(beverages);
const newBeverages = [...new Set(beverages)];
console.log(newBeverages);

function Car(model, year) {
  this.model = model;
  this.year = year;
}

const car1 = new Car("Verna", 2012);
const car2 = new Car("AMaze", 2014);

// console.log(car1);
// console.log(car2);

//Loosely Typed
let num1 = 10;
let num2 = 17;

let num3 = null;

console.log(--num1);

// Comparison Operator

// = == ===

let cat = "7",
  dog = 7,
  elephant = false;

// == and ===
console.log("===", elephant === true); // compare value with type
console.log("==", elephant == false); // compare only values
// < > >= <=

// Logical Operator

// && = AND || = OR  ! = NOt
let states = 1000,
  city = 100;
console.log(states != city);
console.log(states != city && states > city); // all conditions fulfil
console.log(states != city || states < city); //
