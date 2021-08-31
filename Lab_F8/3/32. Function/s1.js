/*
Một số điều cần biết về function

1. Khi function đặt trùng tên ?
2. Khai báo biến trong hàm?
3. Định nghĩa hàm trong hàm?

 */

// function showMessage() {
//     console.log('Message 1') ;
// }
//
// function showMessage() {
//     console.log('Message 2');
// }
// function showMessage() {
//     console.log(' 3')
// }
//
// showMessage();
function showMessage() {
   function showMessage2(){
       console.log('Message 2,5');
   }
   showMessage2();
}

showMessage();

