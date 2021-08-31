// 1.Var / Let, Const: Scope, Hosting
// 2.Const / Var, Let: Assignment

// code thuần: Vả
// Babel: Const, let
// - Khi định nghĩa biến và không gán lại biến đó: Const
// - Khi cần gán lại giá trị cho biến : Let



// var truy cap ngoai scope
// var được Hosting

// Let / const : truy cap trong scope
// let / const : không được Hosting


// Code block: if else, loop, {}, ...

// if (true){
//     var course = 'Javascript basic!';
// }
// console.log(course);



{
    const course = 'Javascript basic!';

    {
        {
            console.log(course);
        }
    }
}

// var a;
//  a = 1;
// 2 cach viet tuy vao tung truong hop
// var a = 1;



