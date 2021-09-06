var h1Elements =
    document.querySelectorAll('h1');

for(var i =  0 ; i < h1Elements.length; i++) {
    // console.log(h1Elements[i]); // in ra tat ca trong the h1 cua length
    h1Elements[i].onclick = function(e) {
        console.log(e.target); // click vao element nao thi hien ra cai do

    }
}