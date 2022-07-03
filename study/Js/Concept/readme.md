- [I. Content](#i-content)
- [1. Phân biệt kiểu biến var, let, và const](#1-phân-biệt-kiểu-biến-var-let-và-const)
  - [1.1. Var](#11-var)
  - [1.2. Let](#12-let)
  - [1.3. Const](#13-const)
- [2. Các loại function](#2-các-loại-function)
  - [2.1. Declaration function](#21-declaration-function)
  - [2.2. Expression function](#22-expression-function)
  - [2.3. Arrow function](#23-arrow-function)
- [3. String](#3-string)
  - [3.1. Thao tác cơ bản](#31-thao-tác-cơ-bản)
- [4. Kiểu dữ liệu số (number)](#4-kiểu-dữ-liệu-số-number)
  - [Toán tử so sánh II](#toán-tử-so-sánh-ii)
- [5. Array](#5-array)
  - [5.1. Cách tạo](#51-cách-tạo)
  - [5.2. Làm việc với array](#52-làm-việc-với-array)
- [6. Object](#6-object)
- [7. Loop](#7-loop)
- [8. Array 2](#8-array-2)
- [9. Callback](#9-callback)
- [10. DOM (Document Object Model)](#10-dom-document-object-model)
  - [10.1. innerText & textContent](#101-innertext--textcontent)
  - [10.2. Event examples](#102-event-examples)
  - [10.3. PreventDefault and StopPropagation](#103-preventdefault-and-stoppropagation)
  - [10.4. Event listener](#104-event-listener)
- [11. JSON, Fetch](#11-json-fetch)
  - [11.1. JSON](#111-json)
  - [11.2. Promise (sync, async)](#112-promise-sync-async)
  - [11.3. Fetch](#113-fetch)
- [12. ECMAScript 6 (ES6 -> born: 2015)](#12-ecmascript-6-es6---born-2015)
  - [12.1. Destructuring, Rest](#121-destructuring-rest)
  - [12.2. Spread](#122-spread)
  - [12.3. Tagged template literals](#123-tagged-template-literals)
  - [12.4. Modules](#124-modules)
  - [12.5. Optional chaining (?.)](#125-optional-chaining-)
- [II. Bonus](#ii-bonus)
- [1. Var, let and Const](#1-var-let-and-const)
- [2. Callback](#2-callback)
- [3. Async](#3-async)
- [4. spread operator (...)](#4-spread-operator-)

# I. Content

# 1. Phân biệt kiểu biến var, let, và const

<details>
<summary> Open </summary>

## 1.1. Var

- với từ khóa `var` chúng ta có thể khai báo đa dạng các kiểu biến như number, string, boolean, etc. Trừ trường hợp được khai báo bên trong 1 function (khi đó biến `var` sẽ có scope là **`function/locally scoped`**), biến `var` sẽ có scope là globally scoped. Đặc biệt, biến `var` còn có thêm tính chất **`hoisting`**: nghĩa là dù khai báo ở đâu thì biến đều sẽ được đem lên đầu scope trước khi code được thực hiện.

Lấy ví dụ:

```js
console.log(greeting);
var greeting = "say hello";
```

sẽ được biên dịch là:

```js
var greeting;
console.log(greeting); // greeting is undefined
greeting = "say hello";
```

## 1.2. Let

- Một trong những nguyên nhân khiến `let` có thể thay thế var để xử lý vấn đề nêu trên là vì biến `let` được khai báo sẽ có scope là **`block scoped`** chứ không phải globally hay locally scoped.

- Chúng ta có thế thấy là đối với biến có scope là block scoped nếu ra khỏi scope được khai báo thì sẽ không thể sử dụng được nữa.

- `let` cho phép chúng ta cập nhật giá trị của biến chứ không cho phép chúng ta tái khái báo lại biến đó

```js
    let greeting = "say Hi";
    console.log(greeting); //"say Hi"

    greeting = "say Hello instead";
    console.log(greeting); //"say Hello instead"

    -----------------------------------------------------

    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

```

- Tuy nhiên, đối với các block khác nhau thì việc tái khai báo biến sẽ không sinh ra lỗi vì đối với từng scope, mỗi biến sẽ được xem xét là 1 biến riêng khác biệt.

- Giống với `var`, `let` cũng có tính **`hoisting`** tuy nhiên lại khác nhau ở chỗ thay vì `var` được khởi tạo với giá trị là undefined thì `let` sẽ không có bất kỳ giá trị khởi tạo nào. Điều này dẫn đến việc nếu chúng ta sử dụng biến `let` trước khi khai báo thì sẽ gặp lỗi `Reference Error`.

## 1.3. Const

- Tương tự với `let` cũng có scope là **`block scoped`**, và **`hoisting`** thì chúng ta có thêm 1 kiểu khai báo biến nữa là `const`. Trong biến `const` nếu trường hợp kiểu của biến là **`primitive`** (bao gồm string, number, boolean, null, và undefined) thì chúng ta sẽ không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến.

```js
    const greeting = "say Hi";
    greeting = "say Hello instead"; // error : Assignment to constant variable.

    ------------------------------------------------

    const greeting = "say Hi";
    const greeting = "say Hello instead"; // error : Identifier 'greeting' has already been declared
```

- Đối với trường hợp kiểu biến là **`reference`** (bao gồm object, array, và function) thì tuy không thể tái khai báo hay cập nhật giá trị của biến nhưng chúng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó.

```js
const greeting = {
  message: "Hello",
  number: "five",
};

greeting.message = "say Hello instead";
console.log(greeting); // {message:"say Hello instead",number:"five"}
```

</details>

# 2. Các loại function

<details>
<summary> Open </summary>

## 2.1. Declaration function

- bắt buộc phải đặt tên
- có thể gọi trước khi được định nghĩa (hoisting)

```js
function msg() {}
```

## 2.2. Expression function

- không bắt buộc phải đặt tên
- không thể gọi trước khi được định nghĩa

```js
var showMsg = function () {};
```

- Call-back

```js
setTimeout(function () {});
```

```js
var myObject = {
  myFunction: function () {},
};
```

## 2.3. Arrow function

</details>

# 3. String

- **Key word:**

  ```
  - Javascript String Methods
  - Biểu thức chính quy
  ```

  - Syntax:

  ```js
  /<content>/g;
  ```

## 3.1. Thao tác cơ bản

<details>
<summary> Methods </summary>

| Method      | Description                         |
| ----------- | ----------------------------------- |
| length      | độ dài chuỗi                        |
| indexOf     | vị trí chuỗi con                    |
| slice       | cắt chuỗi                           |
| replace     | thay thế chuỗi                      |
| toUpperCase | in hoa                              |
| toLowerCase | in thường                           |
| trim        | loại bỏ kí tự khoảng trắng đầu cuối |
| split       | cắt chuỗi thành array               |
| charAt      | lấy 1 kí tự tại vị trí cho trước    |

</details>

# 4. Kiểu dữ liệu số (number)

- **Key word:**

  ```
  - Javascript Number Methods
  ```

<details>
<summary> Methods </summary>

| Method                      | Description                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| Number.isFinite()           | Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean                 |
| Number.isInteger()          | Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean                  |
| Number.parseFloat()         | Chuyển đổi chuỗi đã cho thành một số dấu phẩy động                                          |
| Number.parseInt()           | Chuyển đổi chuỗi đã cho thành một số nguyên                                                 |
| Number.prototype.toFixed()  | Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân |
| Number.prototype.toString() | Chuyển đổi và trả về số đã cho dưới dạng chuỗi                                              |

</details>

<details>
<summary>Code </summary>

```js
Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2); // false
Number.isInteger(Math.PI); // false

Number.parseFloat("10"); // 10
Number.parseFloat("10.00"); // 10
Number.parseFloat("238,21"); // 238
Number.parseFloat("237.22"); // 237.22
Number.parseFloat("34 56 78"); // 34
Number.parseFloat(" 37 "); // 37
Number.parseFloat("18 is my age"); // 18

Number.parseInt("10"); // 10
Number.parseInt("10.00"); // 10
Number.parseInt("238,21"); // 238
Number.parseInt("237.22"); // 237
Number.parseInt("34 56 78"); // 34
Number.parseInt(" 37 "); // 37
Number.parseInt("18 is my age"); // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString(); // '11'
(18).toString(); // '18'
(17.3).toString(); // '17.3'
```

</details>

## Toán tử so sánh II

```
== -> so sánh value
=== -> so sánh value & data type
```

# 5. Array

- **Key word:**

  ```
  - Javascript Array Methods
  ```

<details>
<summary>Open </summary>

## 5.1. Cách tạo

```js
var languages = [
  "C++",
  "C",
  "Js",
  "C#",
  "Java",
  null,
  undefined,
  Object,
  function () {},
];
```

- Kiểm tra Array có phải array không?

```js
console.log(Array.isArray(languages));
```

</details>

## 5.2. Làm việc với array

<details>
<summary> Methods </summary>

| Method   | Description                                                                                                                            |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| toString | chuyển kiểu dữ liệu thành string                                                                                                       |
| join     | biến array thành 1 chuỗi (thêm tham số để định dạng ngăn cách)                                                                         |
| pop      | xoá phần tử cuói mảng và trả về giá trị của phần tử vừa xoá (nếu mảng trống mà pop() thì sẽ trả về `underfined`)                       |
| push     | thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài của mảng                                                                      |
| shift    | xoá phần tử đầu mảng và trả về giá trị của phần tử vừa xoá (nếu mảng trống mà pop() thì sẽ trả về `underfined`)                        |
| unshift  | thêm 1 hoặc nhiều phần tử vào đàu mảng và trả về độ dài của mảng                                                                       |
| splice   | xxoá/thêm ở vị trí bất kì (tham số 1: vị trí bắt đầu, tham số 2: số phần tử cần xoá, tham số 3: giá trị cần thêm (có thể thêm nhiều) ) |
| concat   | nỗi mảng (tham số là mảng cần nối vào sau)                                                                                             |
| slice    | cắt phần tử                                                                                                                            |

</details>

# 6. Object

<details>
<summary> 6.1. Thêm key (Method) - values (Property) </summary>

- Có 2 cách:

  - Cách 1:

```js
var myObject = {
  name: "K1ethoang",
  age: 19,
  address: "Dong Nai, Viet Nam",
  email: "kiethoang101.dev@gmail.com",
};
```

- Cách 2:

```js
var emailKey = "email";

var myObject = {
  name: "K1ethoang",
  age: 19,
  address: "Dong Nai, Viet Nam",
  [emailKey]: "kiethoang101.dev@gmail.com",
};
```

  </details>

<details>
<summary> 6.2. Xoá key (Method) - values (Property) </summary>

```js
delete myObject.email;
```

```js
delete myObject["email"];
```

  </details>

<details>
<summary> 6.3. Object Constructor </summary>

```js
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

var author = new User("Kiet", "Hoang", "Avatar");
var user = new User("Hieu", "Nguyen", "Avatar");

console.log(author);
console.log(user);
```

```js
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

var author = new User("Kiet", "Hoang", "Avatar");
var user = new User("Hieu", "Nguyen", "Avatar");

author.title = "Coder tại nhà";
user.comment = "Hay quá anh ơi";

console.log(author);
console.log(user);
```

  </details>

<details>
<summary> 6.4. Object prototype </summary>

- Prototype là gì?

- Code:

```js
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

User.prototype.className = "K1ethoang";
User.prototype.getClassName = function () {
  return this.className;
};

var author = new User("Kiet", "Hoang", "Avatar");

console.log(author);
console.log(author.getClassName());
```

</details>

# 7. Loop

<details>
<summary> Open </summary>

1.  for - Lặp với điều kiện đúng
2.  for/in - Lặp qua key của đối tượng

    - Duyệt qua cả những property và method của prototype nằm trong Object

3.  for/of - Lặp qua value của đối tượng
4.  while - Lặp khi điều kiện đúng
5.  do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

</details>

# 8. Array 2

<details>
<summary> Method </summary>

- Đều có tham số truyền vào là 1 hàm

| Method  | Description                                                       |
| ------- | ----------------------------------------------------------------- |
| forEach | duyệt qua từng phần tử của mảng                                   |
| every   | **tất cả** các phần tử thoả mãn 1 điều kiện (trả về kiểu boolean) |
| some    | **chỉ cần 1** phần tử thoả mãn 1 điều kiện (trả về kiểu boolean)  |
| find    | tìm kiếm và trả về phần tử tìm kiếm                               |
| filter  | lọc các phần tử theo điều kiện                                    |
| map     | Muốn thay đổi phần tử của mảng                                    |
| reduce  | muốn nhận về 1 giá trị duy nhất                                   |

  <details>
  <summary> forEach() </summary>

```js
var arr = [100, 2000, 323, 4142, 1123];

arr.forEach((value, index) => {
  console.log(index, value);
});
```

  </details>

  <details>
  <summary> every() </summary>

```js
var arr = [100, 2000, 323, 4142, 1123];

var res = arr.every((value, index) => {
  return value > 0;
});

console.log(res);
```

  </details>

  <details>
  <summary> some() </summary>

```js
var arr = [100, 2000, 323, 4142, 1123];

var result = arr.some((value, index) => {
  return value == 1123;
});

console.log(result);
```

  </details>

  <details>
  <summary> find() </summary>

```js
var arr = [100, 2000, 323, 4142, 1123];

var result = arr.find((value, index) => {
  return value == 323;
});

console.log(result);
```

  </details>

  <details>
  <summary> filter() </summary>

```js
var arr = [100, 2000, 323, 4142, 1123];

var result = arr.filter((value, index) => {
  return value % 2 == 0;
});

console.log(result);
```

  </details>

  <details>
  <summary> map() </summary>

```js
var arr = [100, 20123, 2000, 323, 4142, 1123];

function test(value, index) {
  return `Vị trí ${index}: ${value} đồng`;
}

var newArr = arr.map(test);

console.log(newArr);
```

  </details>

  <details>
  <summary> reduce() </summary>

```js
var arr = [100, 20123, 2000, 323, 4142, 1123];

// accumulator: biến lưu trữ
function handle(accumulator, currentValue) {
  return accumulator + currentValue;
}

var result = arr.reduce(handle, 0); // 0: initial value

console.log(result); // output: 27811
```

  </details>

</details>

# 9. Callback

- Khái niệm:
  - Là hàm (function) được truyền qua đối số
  - Khi gọi hàm khác
- Điều kiện:

  1. Là hàm
  2. Được truyền qua đối số

<details>

<summary> remake </summary>

```js
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
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      callBack(this[index], index, this);
    }
  }
};

// every
Array.prototype.every2 = function (callBack) {
  var output;
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      if (callBack(this[index], index, this)) {
        output = true;
      } else {
        output = false;
        break;
      }
    }
  }
  return output;
};

// some
Array.prototype.some2 = function (callBack) {
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      if (callBack(this[index], index, this)) {
        return true;
      }
    }
  }

  return false;
};

// find
Array.prototype.find2 = function (callBack) {
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      if (callBack(this[index], index, this)) {
        return this[index];
      }
    }
  }
};

// filter
Array.prototype.filter2 = function (callBack) {
  var output = [];
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      if (callBack(this[index], index, this)) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

// map
Array.prototype.map2 = function (callBack) {
  var output = [];
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      if (callBack(this[index], index, this)) {
        output.push(this[index]);
      }
    }
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

games.length = 100;

var result = games.some2(function (game) {
  return game.language == "Java";
});

console.log(result);
```

</details>

# 10. DOM (Document Object Model)

## 10.1. innerText & textContent

<details>
<summary>Code</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 class="heading-test">
      <span style="display: none">heading</span>
      <br />
      <span>text</span>
    </h1>

    <script>
      var heading = document.querySelector(".heading-test");

      console.log(heading.innerHTML);
      console.log(heading.innerText);
      console.log(heading.textContent);
    </script>
  </body>
</html>
```

</details>

## 10.2. Event examples

<details>
<summary> Code example </summary>

- Dùng khi muốn dùng luôn và không có nhu cầu gỡ bỏ

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input type="text" />
    <input type="checkbox" />
    <select>
      <option value="1">Một</option>
      <option value="2">Hai</option>
      <option value="3">Ba</option>
    </select>

    <h2></h2>

    <script>
      var inputElement = document.querySelector('input[type="text"]');
      var h2 = document.querySelector("h2");

      inputElement.onchange = function (e) {
        h2.innerText = `Text: ${e.target.value}`;
      };

      document.onkeyup = function (e) {
        switch (e.which) {
          case 27:
            console.log("Exiting...");
            break;
        }
      };

      var checkboxElement = document.querySelector('input[type="checkbox"]');

      var h22 = document.createElement("h2");

      checkboxElement.onchange = function (e) {
        h22.innerText = `Checkbox: ${e.target.checked}`;
        document.body.appendChild(h22);
      };

      var selectElement = document.querySelector("select");

      var h222 = document.createElement("h2");

      selectElement.onchange = function (e) {
        h222.innerText = `Select: ${e.target.value}`;
        document.body.appendChild(h222);
      };
    </script>
  </body>
</html>
```

</details>

## 10.3. PreventDefault and StopPropagation

<details>
<summary> Open </summary>

<details>
<summary> PreventDefault </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <a name="github" href="https://github.com/K1ethoang"> Github </a>
    <br />
    <a name="google" href="https://google.com"> Google </a>

    <script>
      var aElement = document.links;

      for (let i of aElement) {
        i.onclick = function (e) {
          if (!e.target.href.startsWith("https://github.com/K1ethoang")) {
            e.preventDefault();
          }
        };
      }
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
    <style>
      ul {
        display: none;
      }

      input:focus ~ ul {
        display: block;
      }
    </style>
  </head>
  <body>
    <input placeholder="Tìm kiếm" />
    <ul>
      <li>C</li>
      <li>C++</li>
      <li>C#</li>
    </ul>
    <script>
      var ulElement = document.querySelector("ul");

      ulElement.onmousedown = function (e) {
        e.preventDefault();
      };
    </script>
  </body>
</html>
```

</details>

<details>
<summary> StopPropagation </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <div>
      DIV

      <button>CLick me!</button>
    </div>
    <script>
      document.querySelector("div").onclick = function () {
        console.log("DIV");
      };

      document.querySelector("button").onclick = function (e) {
        e.stopPropagation();
        console.log("Click me!");
      };
    </script>
  </body>
</html>
```

</details>

</details>

## 10.4. Event listener

<details> 
<summary> Open </summary>

- Xử lý nhiều việc khi 1 event xảy ra
- Dùng khi có nhu cầu gỡ bỏ

</details>

# 11. JSON, Fetch

## 11.1. JSON

<details>
<summary> Open </summary>

- JSON (JavaScript Object Notation): là 1 định dạng dữ liệu
- Hỗ thợ việc thể hiện dữ liệu:
  - String `"Hello World!"` `"K1ethoang"`
  - Number `42` `23` `09`
  - Boolean `true` `false`
  - The value `null`
  - Array `[1,2,3]` `["Hello"` `"World"]`
  - Object `{"key": "value"}` `{"age": 30}`

```
- stringify: Javascript type -> JSON
- parse: JSON -> javascript

console.log(JSON.parse(users));
console.log(JSON.stringify(users));
```

<details>
<summary> JSON code </summary>

```json
[
  {
    "name": "Kiet Hoang Gia",
    "age": 19,
    "hobbies": ["game", "code"],
    "Student": true
  },
  {
    "name": "Cong Nguyen Thanh",
    "age": 18,
    "hobbies": ["football", "code"],
    "Student": false
  }
]
```

</details>

</details>

## 11.2. Promise (sync, async)

<details>
<summary> Open </summary>

<details>
<summary> Sync / Async </summary>

- Sync
  - chạy theo luồng, tuần tự
  - thằng nào trước chạy trước, thằng nào sau chạy sau
- ## Async

```js
setTimeout(function () {
  console.log("Dòng này sẽ in ra sau");
}, 0);
// setTimeout là tác vụ bất động bộ (async)

console.log("Dòng này sẽ in ra trước"); // Đây là tác vụ đồng bộ (sync)
```

</details>

<details>
<summary> Nỗi đau (pain) </summary>

- callback hell

```js
setTimeout(() => {
  console.log(1); // Viec 1
  setTimeout(() => {
    console.log(2); // Viec 2
    setTimeout(() => {
      console.log(3); // Viec 3
      setTimeout(() => {
        console.log(4); // Viec 4
        setTimeout(() => {
          console.log(5); // Viec 5
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

</details>

<details>
<summary> Khái niệm (concept) </summary>

- [Khái niệm (phút thứ: 12:20)](https://www.youtube.com/watch?v=_4F8ihblZFU)

  > - promise là 1 khái niệm sinh ra giúp xử lý các thao tác async, trước khi có promise thì ta dùng callback mà callback thì có vấn đề là callback hell (code nó bị sâu, khó nhìn, khó code...)
  > - thằng promise này được sinh ra trong phiên bản js mới hơn (ES6) và chúng ta có thể khắc phục tình trạng callback hell giúp code ta viết dễ đọc, dễ code hơn.

- khi gọi `new Promise` nó sẽ gọi đến Executor Function trước khi nhận được cái đối tượng `myPromise`
- Có 3 trạng thái:
  - pending: chờ việc `thành công` hay `thất bại`, trạng thái đang rò rỉ bộ nhớ
  - fulfilled: logic `thành công`
  - rejected: logic `thất bại`

```js
myPromise
  .then(function () {
    // callback được gọi khi resolve() được gọi
  })
  .catch(function () {
    // callback được gọi khi reject() được gọi
  })
  .finally(function () {
    // callback đều được gọi khi 1 trong resolve() hoặc reject() được gọi
    // được hiểu là khi xong, không cần biết là thành công hay thất bại
  });
```

<details>
<summary> Code </summary>

```js
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
```

</details>

</details>

<details>
<summary> Chuỗi (Chain) </summary>

- Chain: Tính chất chuỗi
- cái kết quả trả về của function đằng trước lại là tham số đầu vào của function thứ 2
- nếu `không return ra promise` thì sẽ chạy ngay `then` liền kề dưới nó. Còn ngược lại thì sẽ giải quyết cái `promise` đó trước rồi mới chạy cái `then` dưới

<details>
<summary> Code </summary>

```js
myPromise
  .then(function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3]);
      }, 3000);
    });
  })
  .then(function (data) {
    console.log(data);
    return 123;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (reason) {
    console.log(reason);
  })
  .finally(function () {
    console.log("Done!");
  });
```

</details>

</details>

<details>
<summary> Methods (resolve, reject, all) </summary>

- Có một số thư viện: output luôn luôn là một `promise`

<details>
<summary> Code </summary>

```js
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
```

</details>

</details>

</details>

## 11.3. Fetch

<details>
<summary> Open </summary>

- JSON server: API Server (Fake) / Mock API
- CRUD
  - Create: Tạo mới -> POST
  - Read: Lấy dữ liệu -> GET
  - Update: Chỉnh sửa -> PUT / PATCH
  - Delete: xoá -> DELETE

<details>
<summary> Code </summary>

```js
var postApi = "https://jsonplaceholder.typicode.com/posts";

fetch(postApi)
  .then((response) => {
    return response.json();
    // JSON.parse: từ JSON -> Javascript types
  })
  .then((posts) => console.log(posts))
  .catch((err) => {
    console.log(err);
  });
```

</details>

</details>

# 12. ECMAScript 6 (ES6 -> born: 2015)

## 12.1. Destructuring, Rest

<details>
<summary> Open </summary>

<details>
<summary> Destructuring </summary>

```js
// array
var array = ["C", "C++", "Java"];

var [a, b, c] = array;

console.log(a, b, c);

// object
var course = {
  name: "C++",
  price: 1000,
  image: "image-address",
};

var { name, price } = course;

console.log(name, price);
```

</details>

<details>
<summary> Rest </summary>

- Là toán tử rest:

  - khi sử dụng với `destructuring`
  - Khi sử dụng là tham số với `function`

    ```js
    // Do ở trước nó không có tham số nào nên nó lấy ra tất cả thằng còn lại
    logger(1, 2, 3, 4);

    function logger(...pagrams) {
      console.log(pagrams); // output: 1, 2, 3, 4
    }

    function logger(a, b, ...pagrams) {
      console.log(pagrams); // output: 3, 4
    }
    ```

- **còn lại là toán tử `spread`**

```js
// array
var array = ["C", "C++", "Java"];

var [a, ...rest] = array;

console.log(a);
console.log(rest);

// object
var course = {
  name: "C++",
  price: 1000,
  image: "image-address",
  children: {
    name: "Java",
  },
};

var { name, ...rest } = course;
console.log(name);
console.log(rest);

console.log("---------------------");

var {
  name: parentName,
  children: { name: childrenName },
} = course;

console.log(parentName);
console.log(childrenName);
```

</details>

</details>

## 12.2. Spread

<details>
<summary> Open </summary>

- `...` trước cái biến `array` để bỏ dấu `[]`
- khi gọi đến hàm là đối số

  ```js
  var array = [1, 2, 3, 4, 4];

  logger(...array); // spread

  function logger(...pagrams) {
    console.log(pagrams); // output: 1, 2, 3, 4
  }
  ```

<details>
<summary> Code </summary>

```js
var array = ["C", "C++", "C#"];

var array2 = ["HTML", "CSS"];

var array3 = [...array2, ...array];

console.log(array3);

// object
var obj1 = {
  name: "C++",
};

var obj2 = {
  price: 1000,
};

var obj3 = {
  ...obj1,
  ...obj2,
};

console.log(obj3);
```

</details>

</details>

## 12.3. Tagged template literals

<details>
<summary> Open code </summary>

```js
function highlight([first, ...strings], ...values) {
  return values
    .reduce(
      (acc, curr) => {
        return [...acc, `<span>${curr}</span>`, strings.shift()];
      },
      [first]
    )
    .join("");
  // dùng phương pháp nối mảng với toán tử `...`
}

var game = "CSGO";
var price = 1000;
var store = "steam";

const html = highlight`Mua game ${game} tại cửa hàng ${store} với giá ${price}`;

console.log(html);
```

</details>

## 12.4. Modules

<details>
<summary> Open </summary>

- 1 `module` chỉ có 1 cái `export default`
- [Xem code](../module/)

</details>

## 12.5. Optional chaining (?.)

<details>
<summary> Open </summary>

- sử dụng khi chúng ta **nghi ngờ** 1 cái `key` nào đó của object không tồn tại -> dùng optional chaining
- Không tin cái gì thì (?.) ở đằng trước
- syntax

```js
obj.val?.prop;
obj.val?.[expr];
obj.arr?.[index];
obj.func?.(args);
```

```js
var obj = {
  name: "kiet",
  cat: {
    name: "hieu",
    cat2: {
      name: "hieu2",
      cat3: {
        name: "hieu3",
      },
    },
  },
};

if (
  // không tin cat2
  obj.cat?.cat2
) {
  console.log(obj.cat.cat2.name);
}
```

</details>

# II. Bonus

# [1. Var, let and Const](https://viblo.asia/p/phan-biet-kieu-bien-var-let-va-const-trong-javascript-ORNZqaOnZ0n)

# [2. Callback](https://niithanoi.edu.vn/hieu-don-gian-ve-ham-callback-trong-javascript.html)

# [3. Async](https://viblo.asia/p/giai-thich-ve-asyncawait-javascript-trong-10-phut-1VgZvBn7ZAw)

# [4. spread operator (...)](https://viblo.asia/p/su-dung-spread-operator-trong-javascript-gDVK24welLj)
