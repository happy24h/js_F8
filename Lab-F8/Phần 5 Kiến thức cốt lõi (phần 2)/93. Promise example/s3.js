var users = [
    {
        id: 1,
        name: 'Kien Dam',
    },
    {
        id: 2,
        name: 'Son Dang',
    },
    {
        id: 3,
        name: 'Hung Dam'
    },
    //
];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng

// Làm bài này cần hiểu
// 1. Array
// 2. Function, callback
// 3. Promise
// 4. Dom
// Fake API

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video:('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi!'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Cam on anh ^^'
    }
];

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);

        },1000)
    });
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(users.id)
        });
        setTimeout(function (){
            resolve(result);
        },1000);

    },1000);
}
//
//  getUsersByIds([1, 2])
//      .then(function (users){
//          // console.log(users);
//  // ket qua:     [ { id: 1, name: 'Kien Dam' }, { id: 2, name: 'Son Dang' } ]
//      })



// call back hell
// Promise hell
// Async / Await



getComments()
    .then(function (comments){
        var userIds = comments.map(function (){
            return comments.user_id;
        });
        return getUsersByIds(userIds)
            .then(function (users){
                return {
                    users: users,
                    comments: comments,
                };

            });
    })
    .then(function (data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';

        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });

            html += ` <li> ${user.name}: ${comment.content}</li>`;

        });
        commentBlock.innerHTML = html;

    });

