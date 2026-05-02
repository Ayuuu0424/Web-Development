let greet = function () {
  console.log("Hello World");
};

greet();

let show = function () {
  console.log("Function executed");
};

show();

let display = function (value) {
  console.log(value);
};

display("Chandan");

let message = function () {
  let msg = "Welcome to JavaScript";
  console.log(msg);
};

message();

let sum = function (a, b) {
  console.log(a, b);
};

sum(10, 20);

let fun1 = function () {
  console.log("First Function");
};

let fun2 = function () {
  console.log("Second Function");
};

fun1();
fun2();

let original = function () {
  console.log("Hello");
};

let copy = original;

original();
copy();

let add = function (a, b) {
  return a + b;
};

console.log(add(5, 3));

let square = function (num) {
  console.log(num * num);
};

square(2);
square(3);
square(4);

test();

let test = function () {
  console.log("Hello");
};

let average = function (a, b, c) {
  return (a + b + c) / 3;
};

console.log(average(10, 20, 30));
