// function logger(log) {
//     console.log(log);
// }
// logger('Message...');
// const logger = (log) => {
//     console.log(log);
// }
// logger('Message...');

const logger = (log) => console.log(log);
logger('Message...');

const logger1 = log1 => console.log(log1);
logger1('Message...');


// const sum = (a, b) => {
//     return a + b ;
// }
// console.log(sum(2, 2));
const sum = (a, b) => a + b;
console.log(sum(2, 2));

const sum1 = (a, b) => ({a: a , b: b});
console.log(sum1(2, 2));


const course = {
    name: 'Javascript basic!',
    getName: function () {
        // return this.name
        return this; //context
}
};
console.log(course.getName());

//
//const Courses = (name, price) => { //new Courses(constructor) phải có function
const Courses = function (name, price) {
    this.name = name;
    this.price = price;
}
const jsCourse = new Courses('Javascript', 1000);

console.log(jsCourse);





