var sports = [
  {
    name: "Bơi lội",
    gold: 11,
  },
  {
    name: "Boxing",
    gold: 3,
  },
  {
    name: "Đạp xe",
    gold: 4,
  },
  {
    name: "Đấu kiếm",
    gold: 5,
  },
];

function getTotalGold(arr) {
  var result = arr.reduce((a, b) => {
    return a + b.gold;
  }, 0);
  return result;
}

// Expected results:
console.log(getTotalGold(sports)); // Output: 23
