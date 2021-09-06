// DOM events

// 1. Input / select
// 2. Key up / down

// var inputElement =
//     document.querySelector('input[type="text"]')
//
// inputElement.onchange = function(e) {
//     // console.log(e.target.value);
//
//     inputElement = e.target.value;
//
// }

var inputElement =
    document.querySelector('input[type="checkbox"]')

inputElement.onchange = function(e) {

    console.log(e);
    console.log(e.target);
    console.log(e.target.checked);

}

