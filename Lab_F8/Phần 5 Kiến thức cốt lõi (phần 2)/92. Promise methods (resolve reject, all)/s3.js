var promise1 = new Promise(
    function (resolve) {
        setTimeout(function(){
            resolve([1]);
        }, 2000)
    }
);

var promise2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 5000);
    }
);
Promise.all([promise1, promise2])
    .then(function (result){
        // console.log(result); // in ra 2 ket qua

        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2)); //> [1, 2, 3]
 // cách gộp 2 kết quả
    });

// cách làm gắn ngọn để gộp 2 kết quả
Promise.all([promise1, promise2])
    .then(function([result1, result2]){
        console.log(result1.concat(result2)) //> [1, 2, 3]
    });

var promise2 = Promise.reject('Co loi!');
Promise.all([promise1, promise2])
    .then(function([result1, result2]){
        console.log(result1.concat(result2))
    })
    .catch(function(error){
        console.log(error); // ket qua: Co loi!
    })
