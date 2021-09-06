var btn = document.getElementById('btn');

// btn.addEventListener('click', function (e){
//     console.log(Math.random());
// });


btn.addEventListener('click', function (e){
    console.log('Event 1');
});

btn.addEventListener('click', function (e){
    console.log('Event 2');
});

btn.addEventListener('click', function (e){
    console.log('Event 3');
});

// btn.addEventListener('click' , viec2);

function viec1() {
    console.log('Viec 1');
}
function viec2() {
    console.log('Viec 1');
}

btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);
// In ra ca 2

setTimeout(function (){ // sau 3 giây mất đi việc 1
    btn.removeEventListener('click', viec1);
}, 3000);



