// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// Thư viện: output luôn luôn là
// một promise

// var promise = new Promise(function (resolve, reject){
//     // logic
//     // resolve('Success!');
//     //
//     reject('Error !');
// });
// promise
//     .then(function (result){
//         console.log('result:', result);
//     })
//
//     .catch(function (err){
//     console.log('err: ', err);
// })


// var promise = Promise.resolve('Success!');
var promise = Promise.reject('Error!');
promise
    .then(function (result){
        console.log('result:', result);
    })

    .catch(function (err){
        console.log('err: ', err);
    })

