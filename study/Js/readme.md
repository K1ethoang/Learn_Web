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
  - [10.2. Node properties](#102-node-properties)
- [II. Bonus](#ii-bonus)
- [1. ASYNC (bất đồng bộ)](#1-async-bất-đồng-bộ)

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

[Link chi tiet](https://viblo.asia/p/phan-biet-kieu-bien-var-let-va-const-trong-javascript-ORNZqaOnZ0n)

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

# 3.1. Thao tác cơ bản

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
| splicing | xxoá/thêm ở vị trí bất kì (tham số 1: vị trí bắt đầu, tham số 2: số phần tử cần xoá, tham số 3: giá trị cần thêm (có thể thêm nhiều) ) |
| concat   | nỗi mảng (tham số là mảng cần nối vào sau)                                                                                             |
| slicing  | cắt phần tử                                                                                                                            |

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

## 10.2. Node properties

# II. Bonus

# 1. ASYNC (bất đồng bộ)

- [async](https://viblo.asia/p/giai-thich-ve-asyncawait-javascript-trong-10-phut-1VgZvBn7ZAw)
