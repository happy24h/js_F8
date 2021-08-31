
// Đối tượng `Validator`
function Validator(options) {

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector('.form-message')

        var errorMessage = rule.test(inputElement.value)

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');

        } else {
            errorElement.innerText = ''; // nhập value undefined
            inputElement.parentElement.classList.remove('invalid');
        }

    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form); // form chính

    if (formElement) {
        options.rules.forEach(function (rule) {

            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.form-message')

            if (inputElement) {
                // xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement,rule);

                }
                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {

                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

                    errorElement.innerText = ''; // undefined
                    inputElement.parentElement.classList.remove('invalid');

                }
            }
        });

    }


}



// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function(selector) {

    return {
    selector: selector,
        test: function (value) {
        return value.trim() ? undefined : 'Vui lòng nhập trường này'
            // value true thì undefined : value false thì 'Vui lòng nhập trường này'
            // trim() loại bỏ dấu cách 2 bên đầu chuỗi

        }
    }

}
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';

        }

    }

}

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;

        }

    }

}


