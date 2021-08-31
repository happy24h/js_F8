var coursesApi = 'http://localhost:3000/courses';

function start() {
 getCourses(renderCourses);
 handleCreateForm();

}
start() // output của tất cả function

// index (1)
function getCourses(callback) {
    fetch(coursesApi)
        // fetch dẫn kết nối Api vào Promise(CoursesApi)
        .then(function (response) {
            return response.json(); // Thực thi chức năng với json.parse
        })
        .then(callback); // Lấy ra Api và định dạng Api
        // console.log(coursesApi)
}

// tạo hàm add(create) dữ liệu Post lên Api -> index (3)
function createCourse(data, callback) {
    // Lấy Using Fetch
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

// Tạo hàm DELETE element <li class = "course-item-${courses.id"> -> index (5)
function handDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    fetch(coursesApi + '/' + id, options)
        .then(function (response){
            response.json();
        })
        .then(function (){
            var  courseItem = document.querySelector('.course-item-' + id)

            if(courseItem) {
                courseItem.remove();
            }
        });
}

// Thêm dữ liệu trong element(ul) index (2)
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (courses){

        return `<li class="course-item-${courses.id}">
<h4>${courses.name}</h4>  
<p>${courses.description}</p>
<button onclick="handDeleteCourse(${courses.id})">Xóa</button> 
</li>`; // lấy key value trong Api
    });

    listCoursesBlock.innerHTML = htmls.join('');
    // lấy key value truyền vào attribute(#list-courses) chuyển thành text trong html
}


//Thêm value cho  element(button)-> create add dữ liệu vào js -> index(4)
function handleCreateForm() {
    var createBtn = document.querySelector('#create');//tạo biến lấy id html dom

    // Thêm chắc năng onclick cho biến vừa tạo
    createBtn.onclick = function () { // nhấp vào hiện ra
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        // lấy element(input) trong mảng object(array = [name=""], [type="text"])

        //element(button)->  tao object truyền đối số value biến (name, description )
        var formData = {
            name: name,
            description: description

        };

        // Gọi hàm lấy Using fetch kiểu POST truyền object{key: value}
        createCourse(formData, function (){
            getCourses(renderCourses);// render trả về dữ liệu mới (ko phai f5)

        })
    }
}
