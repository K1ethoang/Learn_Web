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
