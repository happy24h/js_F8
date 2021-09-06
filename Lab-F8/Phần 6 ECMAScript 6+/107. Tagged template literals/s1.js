// 11. Tagged template literals

// function highlight(...rest) {
//     console.log(rest);
// };
// var brand = 'F8';
// var course = 'Javascript';
// highlight`Học lập trình ${course} tại ${brand}`;
// //> [ [ 'Học lập trình ', ' tại ', '' ], 'Javascript', 'F8' ]

function highlight([first, ...strings], ...values) {
    console.log('first: ', first);   //> first:  Học lập trình
    console.log('strings', strings); //> strings [ ' tại ', '!' ]
    console.log('values', values);   //> values [ 'Javascript', 'F8' ]
};

var brand = 'F8';
var course = 'Javascript';
const html = highlight`Học lập trình ${course} tại ${brand}!`;
console.log(html);



