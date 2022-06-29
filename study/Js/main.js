// var myPromise = Promise.reject("Error");

// myPromise
//   .then((value) => {
//     console.log("result: ", value);
//   })
//   .catch((reason) => {
//     console.log("result: ", reason);
//   });

// -----------------------------------------------

var promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([1]);
  }, 1000);
});

var promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([2, 3]);
  }, 3000);
});

Promise.all([promise1, promise2]).then((result) => {
  const result1 = result[0];
  const result2 = result[1];
  console.log(result1.concat(result2));
});
