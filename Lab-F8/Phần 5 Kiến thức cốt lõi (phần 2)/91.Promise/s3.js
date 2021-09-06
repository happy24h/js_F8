function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);

    })
}
sleep(3000) //

    .then(function (){
        console.log(1); //> 3s
        return sleep(2000)
    })

    .then(function (){
        console.log(2); //> 2s
        return sleep(1000)
    })

    .then(function (){
        console.log(3); //> 1s
        return sleep(2000)
    })

    .then(function (){
        console.log(4); //> 2s
        return sleep(1000)
    });