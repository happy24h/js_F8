// 1. New Promise
// Promise giup xu ly thao tac bat dong bo dung cho call back
// va call back hell se lam cho code do roi hon

// 2. Executor

// 1. Pendding : Đang chờ xử lý
// 2. Fulfilled: Hoàn thành
// 3. Rejected: Từ chối

var promise = new Promise(
    // Executor
    function(resolve, reject) {

        resolve();
    });
promise // phu thuoc nhau phai chay return dang truoc theo thu tu
    .then(function() {
        return 1;
        // Nếu không return sẽ trả về undefined
    })
    .then(function(data){
        console.log(data);
        return 2;
    })
    .then(function(data){
        console.log(data);
        return 3;
    })
    .then(function(data){
        console.log(data);
        // return 1 va return 2 không dc console.log nhưng vẫn được in ra
        // đó là vấn đề promise giải quyết cho call back hell
    })
    // Kết quả trả về 1, 2, 3


    .catch(function (error){
        // console.log('Failure!');
        console.log(error);
    })
    .finally(function (){
        console.log('Done!');
    });
