// 2. JSON
// 3. Fetch
// 4.DOM location
// 5.Local storage
// 6.Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance

// 1. Là một định dạng dữ liệu ( chuỗi )
// 2. JavaScript Object Notation (viết tắt là JSON)
// 3. Json: Number, Boolean, Null, Array
// Object

// Mã hóa  / Giải mã
// Encode / decode
// Stringify : Từ Javascript types -> JSON
// Parse: Từ JSON -> Javascript types
//
// var json = null;    //> typeof  la object
// var json = [1,2,3]; //> typeof  la object =>[array]
// var json = 1;       //> typeof  la number
// var json = true;    //> typeof  la boolean

// JSON.parse định dạng kiểu dữ liệu
// var json = 'null';  //> typeof  la string
// console.log(typeof JSON.parse(json)) //> typeof là object
// var json = '[1,2,3]'; //> typeof  la string
// console.log(typeof JSON.parse(json)) //> typeof la object(array)
// var json = '1';//> typeof  la string
// console.log(typeof JSON.parse(json)) //> typeof la number
// var json = 'true';  //> typeof  la string
// console.log(typeof JSON.parse(json)) //> typeof la boolean
//
// JSON.parse Định dạng kiểu dữ liệu
// var json = '["Javascript","PHP"]';   //> typeof  la string
// console.log(typeof JSON.parse(json)) //> object(array)
// var json = '{"name": "Son dang","age":18}'; //> typeof  la string
// console.log(typeof JSON.parse(json)) //> typeof la object
// JSON là định dạng kiểu dữ liệu
// Parse: Từ JSON -> Javascript types
var a = '1';
console.log(typeof JSON.parse(a)); //>  number

var hello = JSON.parse('1');  //> JSON.parse Định dạng dữ liệu
console.log(hello) //> 1

var b = 'true';
console.log(typeof JSON.parse(b));//> boolean

var json = '{"name": "Son dang","age":18}';
console.log(JSON.parse(json));//> { name: 'Son dang', age: 18 }






