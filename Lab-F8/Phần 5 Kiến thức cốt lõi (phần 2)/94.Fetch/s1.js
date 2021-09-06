// 1. Front-end: Xây dựng giao diện
// + người dùng

// 2. Back-end: Xây dựng logic xử lý
// + Cơ sơ dữ liệu

// API (URL) -> Application programing inter

// Cổng giao tiếp giữa các PM

// (placeholder rest api) -> API(URL)
// JSON view Chrome extension

// Backend(OK) -> API(URL) -> Fetch -> JSON/XML
// -> JSON.parse -> Javascript types
// -> Render ra giao diện với HTML

var postApi =

    'https://jsonplaceholder.typicode.com/posts';

    //    'https://jjjjsonplaceholder.typicode.com/posts';
    //     đoạn mã bị sai catch sẽ hoạt động

// stream
fetch(postApi)
    .then(function (response){
        return response.json();
        // JSON.parse: JSON -> javascript

    })
    .then(function(posts){
        // console.log(posts);
        // var html = '';
        var htmls = posts.map(function(post){
            return `<li> 

            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`

        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;

    })
    .catch(function(err){
        console.log('Có Lỗi!');
        alert('có lỗi !')
    })
