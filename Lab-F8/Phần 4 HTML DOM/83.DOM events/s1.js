// DOM events
// 1. Attribute events
// 2. Assign event using the element node
 var h1Element =
     document.querySelector('h1');

// h1Element.onclick = function () {
//     console.log(Math.random());
// }
// click vao hien ra ma so

h1Element.onclick = function (e) {
    console.log(e);
}
// click hien ra thuoc tinh object thuoc tinh ben trong no

h1Element.onclick = function (e) {
    console.log(e.target);
}
// lay ra element chua no
