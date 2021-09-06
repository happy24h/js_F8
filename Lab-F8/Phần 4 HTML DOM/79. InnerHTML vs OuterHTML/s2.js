// 1. Element
// 2. Attribute
// 3. Text
// inner text : văn bản bên trong;

// innerHTML, outerHTML

var boxElement = document.querySelector('.box');

// boxElement.innerHTML = '<span>Test</span>'

boxElement.outerHTML = '<span>Test</span>';
console.log(boxElement);
console.log(boxElement.innerHTML);