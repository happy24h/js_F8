/*
Tham số hàm - Javasctipt cơ bản

1. Tham số?
- Định nghĩa?
- Kiểu dữ liệu?
- Tính private?
- 1 tham số
- Nhiều tham số

2. Truyền tham số
- 1 tham số
- Nhiều tham số

3. Arguments?
- Đối tượng argument
- Giới thiệu vòng for
 */


// function writelog(message) {
//     console.log('toi la nguyen viet anh');
// }
// writelog();
/*
function writelog(message, message2) {
    console.log(message);
    console.log(message2)
}
writelog('test ','test 2');

 */
/*
function writelog(message, message2) {
    if(message) {
        console.log(message);
    }
    if(message2) {
        console.log(message2);
    }
}
writelog('test ','test 2');

 */

/*
function writelog() {
        console.log(arguments);
}
writelog('test ','test 2', 'test 3');

 */
function writeLog() {
    var myString = '' ;
    for(var param of arguments) {
        myString += `${param} -`
    }
    console.log(myString)
}

writeLog('log 1 ','log 2 ', 'log 3 ');




