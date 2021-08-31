// HTML DOM

// 1. Element: ID, class, tag,
// CSS selector, HTML collection
// 2. Attribute
// 3. Text

var boxNode = document.querySelectorAll('.box-1');

// Công việc 1 : Sử dụng tới `boxNode`
// ...
console.log(boxNode);

// Công việc 2 : Sử dụng tới các li element
// là con của `box-1`

console.log(boxNode.getElementsByTagName('li'));
console.log(boxNode.querySelector('p'));
