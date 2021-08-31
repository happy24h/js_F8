// function logger(log) {
//     if (typeof log === 'undefined') {
//         log = 'Gia tri mac dinh!' ;
//     }
//     console.log(log);
// }
//
// logger();

function logger(log = 'Giá trị mặc định!') {
    console.log(log);
}
logger(undefined);

function logger1 (log1, isAlert = false) {
    if (isAlert) return alert(log1)
    else console.log(log1);
}
logger1('Message 12345...', true);



//
// function logger2(log2, type = 'log2') {
//     console[type](log2);
// }
// logger2('Message2...', 'warn') // style = error / warn
