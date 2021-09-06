function logger1(a, b, ...params) {
    console.log(params); //> 3,4
}
logger1(1,2,3,4);

function logger2(obj) {
    console.log(obj.name);
    console.log(obj.price);
}

logger2({
    name: 'Javascript',
    price: 1000,
    description: 'Description content',
});
//> Javascript
//> 1000


function logger({name,price,...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest);// lấy phần còn của object
}

logger({
    name: 'Javascript',
    price: 1000,
    description: 'Description content',
});
//> Javascript
//> 1000
//> { description: 'Description content' }

function logger3([a, ...rest]) {
    console.log(a);   //> 2
    console.log(rest);//> [ 6, 12, 3, 4, 4 ]
    // rest la phần còn lại của mảng
}
logger3([2, 6, 12, 3, 4, 4]);





