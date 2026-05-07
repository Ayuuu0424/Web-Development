let Fdata = [
  {
    name: "Amit Sharma",
    dob: "2002-05-14",
    phone: "9876543210",
    city: "Bhopal",
    profession: "Software Developer",
  },
  {
    name: "Priya Verma",
    dob: "2001-09-21",
    phone: "9123456780",
    city: "Indore",
    profession: "Graphic Designer",
  },
  {
    name: "Rahul Singh",
    dob: "2000-12-10",
    phone: "9988776655",
    city: "Delhi",
    profession: "Teacher",
  },
  {
    name: "Sneha Patel",
    dob: "2003-03-18",
    phone: "9012345678",
    city: "Mumbai",
    profession: "Doctor",
  },
  {
    name: "Vikas Gupta",
    dob: "1999-07-25",
    phone: "9090909090",
    city: "Pune",
    profession: "Engineer",
  },
];

// Fdata.forEach((element) => {
//   console.log(element);
// });

// Fdata.map((element, idx) => {
//   console.log(idx);

//   console.log(element.phone);
// })

console.log(Fdata);
// Bracket Notation
console.log(Fdata[1]["name"]);
// Dot Notation
console.log(Fdata[1].name);

let vikas = {
    name: "Vikas Gupta",
    dob: "1999-07-25",
    phone: "9090909090",
    city: "Pune",
    profession: "Engineer",
  };

console.log(Object.keys(vikas));
console.log(Object.values(vikas));
console.log(Object.entries(vikas));

let arr = [21, 2, 2, 42, 63, 7, 85, 96, 50, 2, 3, 68];
// () k andar wala is compare function
arr.sort((a, b) => a - b);
console.log(arr);

console.log(arr.filter((val) => val > 20)); // prints all values greater than 20
console.log(arr.find((val) => val > 20)); // prints the first value greater than 20
console.log(arr.slice(0, 7));

console.log(arr.find((val) => val === 2));
console.log(arr.findIndex((val) => val === 2));
console.log(arr.findLastIndex((val) => val === 2));

let abc = "This is Web-Development Class";
console.log(abc);
console.log(abc.split(" "));
console.log(abc.split("-"));

