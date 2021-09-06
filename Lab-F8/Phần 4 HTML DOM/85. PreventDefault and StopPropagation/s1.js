// DOM events

// 1. preventDefault
// 2. stopPropagation

// var aElements = document.querySelectorAll('a')
// var aElements = document.links;
//
// console.log(aElements);

var eElements = document.links;

for(var i = 0 ; i < eElements.length; ++i) {
    eElements[i].onclick = function(e) {
        // console.log(e.target.href);
        if (!e.target.href.startsWith('https://f8.edu.vn')){
            e.preventDefault();
        }
    }
}