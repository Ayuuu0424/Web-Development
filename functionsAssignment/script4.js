// 1. Create an anonymous function and assign it to a variable
const func1 = function () {
  console.log("Anonymous function assigned to variable");
};
func1();

// 2. Anonymous function that prints "Hello"
const sayHello = function () {
  console.log("Hello");
};
sayHello();

// 3. Anonymous function that adds two numbers and returns result
const add = function (a, b) {
  return a + b;
};
console.log("Sum:", add(5, 3));

// 4. Call anonymous function stored in variable and print output
const multiply = function (a, b) {
  return a * b;
};
console.log("Multiplication:", multiply(4, 6));

// 5. Pass anonymous function inside setTimeout()
setTimeout(function () {
  console.log("This runs after delay (example)");
}, 1000);

// 6. setTimeout() with anonymous function after 2 seconds
setTimeout(function () {
  console.log("Message after 2 seconds");
}, 2000);

// 7. Create an IIFE using anonymous function
(function () {
  console.log("IIFE executed");
})();

// 8. IIFE that prints a message instantly
(function () {
  console.log("This runs instantly using IIFE");
})();

// 9. Anonymous function stored in variable and called multiple times
const greet = function (name) {
  console.log("Hello " + name);
};
greet("Ayu");
greet("Riya");
greet("Neha");

// 10. Anonymous function as callback
function processUser(name, callback) {
  callback(name);
}
processUser("Ayu", function (name) {
  console.log("Processing user: " + name);
});

// 11. Anonymous function with parameters and return value
const square = function (num) {
  return num * num;
};
console.log("Square:", square(5));

// 12. Program demonstrating all:
// (a) anonymous function in variable
const demo1 = function () {
  console.log("Stored in variable");
};
demo1();

// (b) anonymous function in callback
function demoCallback(cb) {
  cb();
}
demoCallback(function () {
  console.log("Anonymous callback executed");
});

// (c) anonymous function as IIFE
(function () {
  console.log("Anonymous IIFE executed");
})();
