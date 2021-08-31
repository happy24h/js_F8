// DOM events

// 1. preventDefault
// 2. stopPropagation

// document.querySelector('ul').onclick =
//     function(e) {
//     console.log(e.target);
//     }
//

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) {
    e.preventDefault();
}
ulElement.onclick =
    function(e) {
    console.log(e.target);
    }