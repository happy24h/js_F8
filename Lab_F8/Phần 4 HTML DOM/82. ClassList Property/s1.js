// ClassList property

// add
// contains
// remove
// toggle

var boxElement =
    document.querySelector('.box');

// console.log(boxElement.classList);
// console.log(boxElement.classList.length);
// console.log(boxElement.classList.value);

 boxElement.classList.add('red');

// console.log(boxElement.classList.contains('red'));
// kiem tra xem co class red hay khong neu co tra ve true , khong tra false

// boxElement.classList.remove('red');
// xoa class red

// setTimeout(() =>{
//     boxElement.classList.remove('red');
// },3000)
// xoa class red trong 3 giay

// setTimeout(() => {
//     boxElement.classList.toggle('red');
//
// }, 3000);
// chuyển đổi có thành không và không thành có

setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);
// chuyển đổi liên tục có và không thuoc tính class red 
