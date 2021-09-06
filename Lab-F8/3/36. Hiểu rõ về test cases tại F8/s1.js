// Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function (){
        return`${this.firstName} ${this.lastName}`
    }
}
var author = new User('viet anh','nguyen', 'ahihi');
var user = new User('anh', 'nguyen', 'avatar');

author.title = 'Chia sẻ đào tạo F8';
user.comment = 'Liệu có khóa asp.net k ad';

console.log(author);
console.log(user);

// console.log(author.getName());
// console.log(user.getName());