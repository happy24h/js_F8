// var inputElement = document.querySelector('select');
//
// inputElement.onchange = function(e) {
//     console.log(e.target.value);
//
// }

// var inputElement = document.querySelector('input[type="text"]')
//
// //  inputElement.onkeydown = function(e) {
//     inputElement.onkeyup = function(e) {
//
//     // console.log(e.target.value);
//     console.log(e.which);
//
//     switch(e.which) {
//             case 27:
//                 console.log('Exit');
//                 break;
//     }
//
// }

// var inputElement = document.querySelector('input[type="text"]')
//
//   inputElement.onkeydown = function(e) {
//     console.log(e.which); // value tra ve so theo ban phim laptop
//     switch(e.which) {
//         case 27:
//             console.log('EXIT');
//             break;
//         case 13:
//             console.log('SEND CHAT');
//             break;
//     }
//   }

var  inputElement = document.querySelector('input[type="text"]')
inputElement.onkeypress = function(e) {
    switch( e.which) {
        case 27 :
            console.log('Exit');
        case 13:
            console.log('SEND CHAT');
            break;
    }
}
