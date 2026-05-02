let test = "This is Global test Variable";

function classA() {
  console.log("ClassA", test);
}
function classB() {
  console.log("ClassB", test);
}
function classC() {
  let test2 = "This is Local Variable";
  console.log("ClassC",test2);
  
  console.log("ClassC", test);
}
function classD() {
  console.log("ClassD", test);
}
function classE() {
  console.log("ClassE", test);
}
function classF() {
  console.log("ClassF", test);
}
function classG() {
  console.log("ClassG", test);
}
