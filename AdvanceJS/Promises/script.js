function getData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Sent", value);
      resolve("Query Solved");
    }, 5000);
  });
}

console.log(getData(1));

const myPromise = getData(1); // getData is a function call

console.log(myPromise);

