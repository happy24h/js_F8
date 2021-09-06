var promise = new Promise(
    // Executor
    function(resolve, reject) {

        resolve();
    }
);
promise
    .then(function (){
        return new Promise(function(resolve){
        // setTimeout(resolve, 3000);
            setTimeout(function(){
                resolve([1,2,3]);
            },3000);
    });
})
    .then(function (data){
        console.log(data); //> [ 1, 2, 3 ]
    })


    .catch(function (error){
        // console.log('Failure!');
        console.log(error);
    })
    .finally(function (){
        console.log('Done!');
    });
