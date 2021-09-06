// Callback

// Là hàm (function) được truyền qua đối số
// khi gọi hàm khác

// 1. là hàm
// 2. Được truyền qua đối số

function myFunction(param) {
    // console.log(typeof param);
    param('học lập trình');

}
function myCallback(value) {
    console.log( 'Value:',value);
}
// myCallback(123);
myFunction(myCallback);