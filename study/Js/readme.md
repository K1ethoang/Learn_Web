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

# 4. Array

- **Key word:**

  ```
  - Javascript Array Methods
  ```

<details>
<summary>Open </summary>

## 4.1. Cách tạo

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

## 4.2. Làm việc với array

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

# 4. Object
