//1. Xác định điểm dừng
//2. Logic handle => Tạo ra điểm dừng
function loop(start, end, cb) {
    if (start < end) {
        cb(start);
        return loop(start + 1 , end, cb);
    }
}
var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length  , function (index) {
    console.log(array[index]);
});
//> Javascript PHP Ruby




// function giaiThua(number) {
//     var output = 1;
//     for (var i = number; i > 0; i--) {
//         output = output * i; // 3 * 2 * 1 = 6
//     }
//     return output;
// }
// console.log(giaiThua(3));//> 6


// Xác đinh điểm dừng //(number - 1) là điểm dừng
function giaithua(number) {
    if (number > 0) {
        return number * giaithua(number - 1);// => 6 * (5-1)
        // lap lai khi 1 trong 2 number > 0 (number = 0 la sai)
    }
    return 1;
}
console.log(giaithua(6));// 720