var inputElement = document.querySelector("#inputjs");
var outputElement = document.querySelector("#outputjs");
var submitElement = document.querySelector("#submitjs");
var resetElement = document.querySelector("#resetjs");

var string;

inputElement.onkeyup = function (e) {
  string = e.target.value;
};

function deleteMaxElements(array) {
  let maxElement = array[0];
  for (let i = 1; i < array.length; i++) {
    if (maxElement < array[i]) {
      maxElement = array[i];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (maxElement == array[i]) {
      array.splice(i, 1);
      i--;
    }
  }
}

function displayResults(array) {
  outputElement.innerText = array.join(",");
}

submitElement.addEventListener("click", function (e) {
  if (string == undefined) {
    alert("Please enter array");
    return;
  }
  e.preventDefault();
  let numbers = string.trim().split(",");

  numbers = numbers.map((element) => {
    return Number.parseInt(element);
  });

  for (let i = 0; i < numbers.length; i++) {
    if (Number.isNaN(numbers[i])) {
      numbers.splice(i, 1);
      i--;
    }
  }

  deleteMaxElements(numbers);
  displayResults(numbers);
});

resetElement.addEventListener("click", function (e) {
  string = undefined;
});
