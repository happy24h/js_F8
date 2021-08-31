// HTML DOM

// 1. Element: ID, class, tag,
// CSS selector, HTML collection
// 2. Attribute
// 3. Text
// var headingNode = document.getElementById('heading');
// ID getElement (số ít element không s); Class getElements(số nhiều elements có s);

 // var headingNodes = document.getElementsByClassName('heading');
// var headingNodes = document.getElementsByTagName('p');
// console.log(headingNodes);


// var headingNodes = document.querySelector('.box .heading-2:first-child');
// lấy phần tử heading dau tien

//var headingNodes = document.querySelector('.box .heading-2:nth-child(2)');
// lấy ra phần tử thứ 2

var headingNodes = document.querySelectorAll('.box .heading-2');
// gọi tất cả phần tử trong mảng
// console.log(headingNodes);

console.log(headingNodes[3]);
// goi theo số thứ tự phần tử trong mang


//var headingNode= document.querySelector('heading');

//console.log(headingNode);
/*
console.log({
    element: headingNode
});
 */


