// 1. Arrow function that prints “Welcome to JavaScript”
const welcome = () => {
  console.log("Welcome to JavaScript");
};
welcome();

// 2. Arrow function that takes a name and prints greeting
const greet = (name) => {
  console.log("Hello " + name);
};
greet("Ayu");

// 3. Arrow function that adds two numbers and returns result
const add = (a, b) => a + b;
console.log("Sum:", add(5, 3));

// 4. Arrow function that multiplies two numbers and prints output
const multiply = (a, b) => {
  console.log("Multiplication:", a * b);
};
multiply(4, 6);

// 5. Arrow function that returns square of a number
const square = (num) => num * num;
console.log("Square:", square(5));

// 6. Arrow function that takes three numbers and returns sum
const sumThree = (a, b, c) => a + b + c;
console.log("Sum of three:", sumThree(1, 2, 3));

// 7. Arrow function that returns length of a string
const stringLength = (str) => str.length;
console.log("Length:", stringLength("JavaScript"));

// 8. Arrow function to check positive or negative
const checkNumber = (num) => {
  if (num >= 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
};
checkNumber(-5);

// 9. Arrow function to find difference between two numbers
const difference = (a, b) => a - b;
console.log("Difference:", difference(10, 4));

// 10. Arrow function that returns a message
const message = () => "Learning Arrow Functions";
console.log(message());
