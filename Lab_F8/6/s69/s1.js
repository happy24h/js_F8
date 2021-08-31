// forEach , find , filter, some,very, reduce

// every: true / false

Array.prototype.every2 = function( callback) {
    var output = true;

    for( var index in this) {
        if( this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }
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
        isFinish: true,
    }
];
var result = courses.every2(function(course, index,array){
    return course.coin > 679;
});
console.log(result);