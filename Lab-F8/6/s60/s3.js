Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0]
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)

    }
    return result
}
const array1 = [1, 2, 3, 4];

const result = array1.reduce2((accumulator, currentValue, index, array) => {
    console.log(accumulator, currentValue, index, array)
    return accumulator + currentValue
})
console.log(result);
