/*
Array methods:
forEach()
every()
some()
find()
filter()
map()
reduce()
 */
var courses = [
    {
        id: 1,
        name: ' Javascript',
        coin: 0,

    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 200,

    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 320
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 480
    },
];
// biến lưu trữ và Thực hiện việc lưu trữ

/*
// biến lưu trữ
var totalCoin = 0;

// lặp qua các phần tử
for (var course of courses) {

    // Thực hiện việc lưu trữ
    totalCoin += course.coin;
}
console.log(totalCoin);

 */

var totalCoin = courses.reduce(function coinHandler(accumulator, currentValue ) {

    return accumulator + currentValue.coin;}, 5);
console.log(totalCoin);


/*
var totalCoin = courses.reduce((a, b)=> a+b.coin, 5);
console.log(totalCoin);

 */