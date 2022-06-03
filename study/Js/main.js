var games = [
  {
    name: "CSGO",
    language: "C++",
    price: 100,
  },
  {
    name: "LOL",
    language: "C#",
    price: 200,
  },
  {
    name: "Minecraft",
    language: "Java",
    price: 300,
  },
  {
    name: "Valorant",
    language: "C++",
    price: 400,
  },
  {
    name: "FO4",
    language: "Java",
    price: 500,
  },
];

// forEach
Array.prototype.forEach2 = function (callBack) {
  var length = this.length;

  for (let i = 0; i < length; i++) {
    callBack(this[i], i);
  }
};

// every
Array.prototype.every2 = function (callBack) {
  var output,
    length = this.length;

  for (let i = 0; i < length; i++) {
    if (callBack(this[i], i)) {
      output = true;
    } else {
      output = false;
      break;
    }
  }

  return output;
};

// some
Array.prototype.some2 = function (callBack) {
  length = this.length;

  for (let i = 0; i < length; i++) {
    if (callBack(this[i], i)) {
      return true;
    }
  }

  return false;
};

// find
Array.prototype.find2 = function (callBack) {
  var length = this.length;

  for (let i = 0; i < length; i++) {
    if (callBack(this[i], i)) {
      return this[i];
    }
  }
};

// filter
Array.prototype.filter2 = function (callBack) {
  var output = [],
    length = this.length;

  for (let i = 0; i < length; i++) {
    if (callBack(this[i], i)) {
      output.push(this[i]);
    }
  }

  return output;
};

// map
Array.prototype.map2 = function (callBack) {
  var output = [],
    length = this.length;

  for (let i = 0; i < length; i++) {
    var result = callBack(this[i], i);
    output.push(result);
  }

  return output;
};

// reduce
Array.prototype.reduce2 = function (callBack, initialValue) {
  var length = this.length;
  let i = 0,
    result = initialValue;

  if (arguments.length < 1) {
    i = 1;
    result = this[0];
  }

  for (; i < length; i++) {
    result = callBack(result, this[i]);
  }

  return result;
};

var result = games.find2(function (game) {
  return game;
});

console.log(result);
