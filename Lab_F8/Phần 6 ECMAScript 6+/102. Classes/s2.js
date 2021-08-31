function Course1(name, price) {
    this.name = name;
    this.price = price;
    return hello = 5; // giá trị của hàm
}

const phpCourse1 = new Course1('php1', 900); // biến của hàm Course1 được tạo mới ở bên ngoài
const jsCourse1 = new Course1('js', 1300);

// console.log(phpCourse1);
// console.log(jsCourse1);
Course1(); // khi lấy hàm ra bên ngoài sẽ được những biến được tạo từ Course1
console.log(phpCourse1,jsCourse1,hello);


class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const phpCourse = new Course('php', 1000);
const jsCourse = new Course('javascript', 1200);

console.log(phpCourse);
console.log(jsCourse);
