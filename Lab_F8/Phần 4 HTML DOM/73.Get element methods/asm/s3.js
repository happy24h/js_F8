// lam bai tap
/*
Bài tập
Cho trước DOM từ cấu trúc HTML sau:

    <h1>Học lập trình tại F8</h1>

<section>
    <h2>Học JS HTML DOM</h2>
</section>

<div>
    <h3>Làm bài tập ngay trên F8</h3>
</div>
Yêu cầu
Lấy h1 element và lưu vào biến h1Element
Lấy h2 element và lưu vào biến h2Element
Lấy h3 element và lưu vào biến h3Element

 */

//cách 1
var h1Element = document.getElementsByTagName('h1')[0];
var h2Element = document.getElementsByTagName('h2')[0];
var h3Element = document.getElementsByTagName('h3')[0];

//cách 2
var h1Element = document.getElementsByTagName('h1').item(0);
var h2Element = document.getElementsByTagName('h2').item(0);
var h3Element = document.getElementsByTagName('h3').item(0);

