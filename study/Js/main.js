var ageInput = Number.parseInt(prompt("Enter age > 18"));

var myPromise = new Promise(
  // Executor
  function (resolve, reject) {
    // logic
    // Giải quyết (thành công): resolve()
    // Từ chối (từ chối): reject()

    if (ageInput > 18) {
      resolve("Good job!");
    } else {
      let reason = new Error("Age muse be > 19");
      reject(reason);
    }
  }
);

myPromise
  .then(function (message) {
    console.log(message);
  })
  .catch(function (reason) {
    console.log(reason);
  })
  .finally(function () {
    console.log("Done!");
  });
