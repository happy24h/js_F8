// Bài tập
// Cho trước DOM có cấu trúc HTML như sau:
//
//     <div class="box"></div>
//
// <div></div>
// Sử dụng thuộc tính textContent để giải các bài tập trong phần này.
//
//     Yêu cầu
// Thêm nội dung text Học lập trình tại F8 vào thẻ div có class box
// Thêm nội dung text Thao tác với DOM qua bài tập tại F8 vào thẻ div thứ hai

// cách 1
var headingElement = document.querySelector('div');
headingElement.textContent = 'Học lập trình tại F8';
headingElement.innerText = 'Thao tác với DOM qua bài tập tại F8';

// cách 2
document.querySelectorAll('div')[0].textContent = 'Học lập trình tại F8'
document.querySelectorAll('div')[1].textContent = 'Thao tác với DOM qua bài tập tại F8'
