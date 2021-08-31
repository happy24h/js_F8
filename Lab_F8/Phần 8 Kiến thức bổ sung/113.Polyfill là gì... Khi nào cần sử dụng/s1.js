if (!String.prototype.includes){
    String.prototype.includes = function (search,start){
        if(search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');

        }
        if(start === undefined) {start = 0}
        return this.indexOf(search, start) !== -1;
        // return 'Javascript course'.indexOf('javascript', 0) !== -1;
    }
}

// var title = "Javascript course";
// title.includes();
// 'Javascript course'.includes();
