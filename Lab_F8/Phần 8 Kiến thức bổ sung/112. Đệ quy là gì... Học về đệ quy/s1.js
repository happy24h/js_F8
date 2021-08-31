// var array = ['a', 'b', 'c', 'a','b', 'c'];
// console.log([...(new Set(array))]);
//
// hello = (element) => {
//     console.log(array);
// }
// hello();
//
// array.forEach(function hello1(element1, index){
//     console.log(element1);
// })

// 1. xac dinh diem dung
// 2. logic handle => Tao ra diem dung



// function countDown (num) {
//     if(num > 0) {
//         // loop(vòng lặp)
//         console.log(num);
//         return countDown(num - 1);
//     }
//     return num;
// }
// countDown(5);

function loop(start, end, cb) {
    if (start <= end) {
        cb(start);
        return loop(start + 1 , end, cb);
    }
}
var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length -1 , function (index) {
    console.log('index: ' , index);
});
