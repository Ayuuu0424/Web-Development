// .....C U R D Operation......

// Creation denoted by 'C'
// let arr = [12, 23, 34, 45, 67, 78, 12];

// Reading of Array denoted by 'R'
// for (var i = 0; i < 7; i++) {
//   console.log(arr[i]);
// }

// Another Way of Reading an Array
// console.log(arr);

// Updation of Array denoted by 'U'
// arr[2] = arr[2] + 10;
// console.log(arr);

// Deletion of Array denoted by 'D'
// arr = [];
// console.log(arr);

let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];
console.log(arr);

arr.push(99);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(11);
console.log(arr);

arr.shift(11);
console.log(arr);

console.log(arr.at(0));

console.log(arr.indexOf(78));

console.log(arr.includes(89));
console.log(arr.indexOf(89));

// Sorting an Array
let unar = [56, 34, 23, 89, 45, 67, 12, 90, 87, 45, 98];
console.log(unar);
unar.sort();
console.log(unar);

unar.reverse();
console.log(unar);

// For-each Loop
let nums = [12, 23, 34, 45, 67, 78, 12];
for (var i = 0; i < 7; i++);
{
  console.log(nums[i]);
}

console.log("For-each loop");


nums.forEach((element) => {
  console.log(element);
});
