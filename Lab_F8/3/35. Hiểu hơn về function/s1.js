// Object trong javascript

var emaiKey = 'email';

var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha noi , VN',
    emailKey: 'sondn@fulltack.edu.vn',
    phone: '09876543',
    getName: function() {
        return this.name;
    },
    getAge: function (){
        return this.phone;
    }
};
console.log(myInfo.getAge());



console.log(myInfo.getName());


// delete myInfo.age;
// delete myInfo.address;
// myInfo.email = 'sondn@fulltack.edu.vn';
// myInfo['my-email'] = 'sondn@fulltack.edu.vn';
// console.log(myInfo);
// console.log(myInfo['address']);