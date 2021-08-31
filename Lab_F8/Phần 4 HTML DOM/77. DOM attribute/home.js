// Dom Attributes
/*
var headingElement = document.querySelector('h1');
headingElement.getAttribute('class');
headingElement.title = 'Title test';

// alert(headingElement.title);
console.log(headingElement.getAttribute('class'));
console.log(headingElement.getAttribute('title'));

 */

var headingElement = document.querySelector('h1');
headingElement.setAttribute('data', 'test data');
// headingElement.title = 'Title test';
// alert(headingElement.title);


// alert(headingElement.setAttribute());
alert(headingElement.getAttribute('data'));