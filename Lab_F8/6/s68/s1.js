// forEach, find, filter ,some,
Array.prototype.some2 = function (callback) {
    var output = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
           if( callback(this[index], index, this))
            {
                output = true;
                break;
                // return true;
            }
            ;
        }
    }
    // return false;
    return output;
}

var courses = [
    {
        name: 'javascript',
        coin: 680,
        isFinish: true, // chuyen isFinal thanh isfinish
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false,
    },
    {
        name: 'ruby',
        coin: 980,
        isFinish: false,
    }
];
var result = courses.some2(function (course, index,array){
    return course.isFinish;

});
console.log(result);