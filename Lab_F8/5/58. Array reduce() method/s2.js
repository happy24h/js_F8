var courses = [
    {
        id: 1,
        name: ' Javascript',
        coin: 100,

    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 200,

    },
    {
        id: 3,
        name: 'Ruby',
        coin: 300
    },
];
//Biến lưu trữ
// Thực hiện việc lưu trữ

// // Biến lưu trữ
// var totalCoin = 0;
//
// // Lặp qua phần tử
// for (var course of courses) {
//
//     // Thực hiện việc lưu trữ
//     totalCoin += course.coin;
// }
// console.log(totalCoin);
// //> 600

// i = 0;
// var totalCoin = courses.reduce(function(){});
// function coinHandler(accumulator,currentValue, currentIndex) {
//     i++;
//     console.table({
//         'Lượt chạy: ': i,
//         'Biến tích lũy: ': accumulator
//     });
//     return 100;
//     // console.log(accumulator);
// }
// var totalCoin = courses.reduce(coinHandler,0);// initial value

i = 0;
function coinHandler1(accumulator,currentValue, currentIndex) {
    i++;
    var total = accumulator + currentValue.coin;
    // return total; // return sẽ trả ra ngoài hàm luôn vì console.table đứng sau lên không được in ra
    console.table({
        'Lượt chạy: ': i,
        'Biến tích lũy: ': accumulator,
        'Giá khóa học:' : currentValue.coin,
        'Tích trữ được: ': total
    });
    return accumulator + currentValue.coin; // return value mới gọi lại đc nếu không value không xác định (undefined)
}
var totalCoin1 = courses.reduce(coinHandler1,5);// initial value
console.log(totalCoin1);


// var totalCoin = courses.reduce(function (accumulator, currentValue){
//     return accumulator + currentValue.coin;
// },0);// initial value
//
// console.log(totalCoin);
//
// // ES6
// var totalCoin = courses.reduce((a,b) => a + b.coin, 0);
// console.log(totalCoin);
//



