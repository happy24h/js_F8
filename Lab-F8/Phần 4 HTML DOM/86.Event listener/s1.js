//DOM là viết tắt của ( Document Object Model )
// 1. DOM Event / Event listener
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance

// 1. Xử lý nhiều việc khi event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe

var btn = document.getElementById('btn');

 // console.log(btn);

// setTimeout(function (){ //chọn thời gian lắng nghe
//     btn.onclick = function() {
//     // Viec 1
//     console.log('viec 1');
//
//     // Viec 2
//     console.log('viec 2');
//
//     // Viec 3
//     alert('viec 3');
// }
 // }, 3000); // lắng nghe sau 3 giây


setTimeout(function (){
     btn.onclick = function () {
         // hủy thời gian lắng nghe khi đặt ngoài fuction

     }
}, 3000);// hủy bỏ lắng nghe
btn.onclick = function() {
    // Viec 1
    console.log('viec 4');

    // Viec 2
    console.log('viec 5');

    // Viec 3
    alert('viec 6');
}

