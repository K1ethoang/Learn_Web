function Validator(options) {
  // Hàm thực hiện validate
  const validate = (inputElement, rule) => {
    var parentElement = inputElement.parentElement;
    var errorElement = parentElement.querySelector(options.errorSelector);
    var errorMessage = rule.handler(inputElement.value);

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = null;
      parentElement.classList.remove("invalid");
    }
  };

  const validateTyping = (inputElement) => {
    var parentElement = inputElement.parentElement;
    var errorElement = parentElement.querySelector(options.errorSelector);

    errorElement.innerText = null;
    parentElement.classList.remove("invalid");
  };

  //   Lấy element của form cần validate
  var formElement = document.querySelector(options.form);

  if (formElement) {
    options.rules.forEach((rule) => {
      var inputElement = formElement.querySelector(rule.selector);

      //  xử lý trường hợp blur khỏi input
      if (inputElement) {
        inputElement.onblur = () => {
          validate(inputElement, rule);
        };

        //xử lý mỗi khi người dùng nhập vào input
        inputElement.oninput = () => {
          validateTyping(inputElement);
        };
      }
    });
  }
}

// define
// nguyên tắc của các rules:
// 1. Khi có lỗi thì trả ra message lỗi
// 2. Khi hợp lệ => không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
  return {
    selector,
    handler(value) {
      return value.trim() ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector,
    handler(value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      return regex.test(value)
        ? undefined
        : message || "Trường này phải là email";
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector,
    handler(value) {
      return value.length >= min
        ? undefined
        : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector,
    handler(value) {
      return value === getConfirmValue()
        ? undefined
        : message || "Giá trị nhập vào không chính xác";
    },
  };
};
