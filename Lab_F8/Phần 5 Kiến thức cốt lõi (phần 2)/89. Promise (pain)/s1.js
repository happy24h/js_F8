// 3. Promise
// - Sync
// - Async
// - Nỗi đau
// - Lý thuyết , cách hoạt động
// - Thực  hành, Ví dụ

// Callback hell
// Pyramid of doom

setTimeout(function(){
    console.log(1); // viec 1
    setTimeout(function() {
        console.log(2); // viec 2
        setTimeout(function() {
            console.log(3); // viec 3
            setTimeout(function() {
                console.log(4); // viec 4

            },1000);
        },2000);
    },1000);
}, 2000); // 2 giây mới chạy

// ràng buộc nhau phải theo trình tự từ 1 - 4 qua function

