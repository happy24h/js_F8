
// Đối tượng `Validator`
function Validator(options) {

    // Hàm thực hiện validate
    function validate(inputElement, rule) {

        // Phần tử cha chỉ định phần ra tử con
        var errorElement = inputElement.parentElement.querySelector('.form-message')
        // console.log(errorElement) // span.form-message

        // value: inputElement.value
        // test func: rule.test
        // console.log(rule); // {selector: "#fullname", test: ƒ}, ...

        var errorMessage = rule.test(inputElement.value)
        //console.log(errorMessage) // value ? undefined : Vui lòng nhập trường này
        //if > undefined : Vui lòng nhập trường này ;
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
            // classlist giúp thêm class , xóa class

            // else > (khác undefined ) => value đã nhập vào
        } else {
            errorElement.innerText = ''; //  (span.form-message)=> errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }

    }

    // Lấy element của form cần validate
    // console.log(options) // key value  object Validator
    var formElement = document.querySelector(options.form);
    //console.log(options.rules); // key value object Validator

    if (formElement) {

        options.rules.forEach(function (rule) {

            // trỏ vào key từng object trong rules (rule.selector)
            // console.log(rule); //> {selector: "#fullname",test: ƒ (value)}
            // console.log(rule.selector); //> #fullname,...

            var inputElement = formElement.querySelector(rule.selector);
            // console.log(inputElement); // input#fullname.form-control,...
            var errorElement = inputElement.parentElement.querySelector('.form-message')

            if (inputElement) {

                // xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement,rule);
                    //console.log('blur' + rule.selector); //blur#fullname, ...
                    // console.log(inputElement.value); // blur ra value input nhập vào


                    //console.log(inputElement)// inputElement là phần tử con của element['.form-group']

                    //  phần tử (inputElement) và Element['.form-message'] có chung 1 element cha
                    // console.log(inputElement.parentElement.querySelector('.form-message'))//>  <span class="form-message"></span>

                    // Thuộc tính parentElement trả về phần tử cha của phần tử được chỉ định.

                }
                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    //console.log(inputElement.value) //event nhap vao input
                    // var errorElement = inputElement.parentElement.querySelector('.form-message')
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
// 1. Khi có lỗi => Trả ra messae lỗi
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


