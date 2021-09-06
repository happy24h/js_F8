
// Đối tượng `Validator`
function Validator(options) {

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector('.form-message')

        // value: inputElement.value
        // test func: rule.test
        //console.log(rule); // {selector: "#fullname", test: ƒ},...

        var errorMessage = rule.test(inputElement.value)
        //console.log(errorMessage) // undefined : Vui lòng nhập trường này
        //true > undefined : false > Vui lòng nhập trường này
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
            // classlist them thuoc tinh css (color,font-size,...)

        } else {
            errorElement.innerText = ''; // undefined
            inputElement.parentElement.classList.remove('invalid');
        }

    }

    // Lấy element của form cần validate
    // console.log(options) // key value  object Validator
    var formElement = document.querySelector(options.form);
    //console.log(options.rules); // key value object Validator

    if (formElement) {

        options.rules.forEach(function (rule) {
            //console.log(rule.selector); // trỏ vào key từng object trong rules

            var inputElement = formElement.querySelector(rule.selector);
            // console.log(inputElement); // return element input[attribute] html dom
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

                    // Thuộc tính parentElement trả về phần tử cha của phần tử con được chỉ định cùng 1 element cha.


                }
                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    //console.log(inputElement.value) //event nhap vao input
                    var errorElement = inputElement.parentElement.querySelector('.form-message')
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


