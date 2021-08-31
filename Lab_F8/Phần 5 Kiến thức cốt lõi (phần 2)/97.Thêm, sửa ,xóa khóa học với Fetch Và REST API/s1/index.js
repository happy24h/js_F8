var coursesApi = 'http://localhost:3000/courses';

function start() {
 getCourses(renderCourses);
 handleCreateForm()

}
start() // output của tất cả function

function getCourses(callback) {
    fetch(coursesApi)
        // fetch dẫn kết nối Api vào Promise(CoursesApi)
        .then(function (response) {
            return response.json(); // Thực thi chức năng với json.parse
        })
        .then(callback); // Lấy ra Api và định dạng Api
        // console.log(coursesApi)
}

// tạo hàm add(create) dữ liệu định dạng Post lên Api (index 4);
function createCourse(data, callback) {

    // tạo dối tượng để hỗ trợ post lên Api (postman)
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // định dạng kiểu string cua JSON.stringify
    };
    fetch(coursesApi, options)
        .then(function (response){
            response.json();
        })
        .then(callback)
         //console.log(options) // nhập dữ liệu và create vào trong js
}

// Thêm dữ liệu trong element(ul#list-courses)
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (courses){
        return `<li>
<h4>${courses.name}</h4>  
<p>${courses.description}</p>
</li>`; // lấy key value trong Api
    });
    listCoursesBlock.innerHTML = htmls.join('');
    // lấy key value truyền vào attribute(#list-courses) chuyển thành text trong html
}


//Thêm chức năng cho element(button)-> create add dữ liệu vào js
function handleCreateForm() {
    var createBtn = document.querySelector('#create');//tạo biến lấy id html dom

    // Thêm chắc năng onclick cho biến vừa tạo
    createBtn.onclick = function () { // nhấp vào hiện ra
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        // lấy element(input) trong mảng object(array = [name=""], [type="text"])

        //element(button)-> biến định dạng kiểu dữ kiệu add vào Api
        var formData = {
            name: name,
            description: description

        };
        createCourse(formData, function (){
            getCourses(renderCourses); // giúp tạo dữ liệu không cần f5(render ra dữ liệu)
        })
    }
}
