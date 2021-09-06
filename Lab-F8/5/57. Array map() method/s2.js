var array = [2, 4, 6, 8, 9];

function CallbackFn(arrayMap) {
    // console.log(arrayMap) //> 2 4 6 8 9
    return arrayMap * 2; // return arrayMap là đối số newArray

}


var newArray = array.map(CallbackFn); //array.map được truyền vào hàm CallbackFn
console.log(newArray);

//>[ 4, 8, 12, 16, 18 ] // return arrayMap;


