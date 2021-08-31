// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);

    })
}
sleep(1000) // 1 giay se in ra

    .then(function (){
        console.log(1);
        return sleep(1000)
    })

    .then(function (){
        console.log(2);
        return sleep(1000)
    })

    .then(function(){
       // console.log(3);
       return new Promise(function(resolve, reject){
           reject('co loi !');
       })
})
    .then(function (){
        console.log(4);
        return sleep(1000)
    })
    .catch(function (err){
        console.log(err); // in ra 'co loi !' o trong reject

})
