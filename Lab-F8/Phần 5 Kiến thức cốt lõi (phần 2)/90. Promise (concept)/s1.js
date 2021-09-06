// 1. New Promise : tạo promise
// promise : lời hứa (hứa hẹn)
// Promise giúp xử lý thao tác bất đồng bộ dùng cho call back
// và call back hell sẽ làm cho code đỡ rối

// 2. Executor : Người thực thi (thực thi)

// 1. Pendding : Đang chờ xử lý(Executor đang chờ xư lý thành công hay thất bại)
// Resolve là trả về thành công, Reject là trả về thất bại
// 2. Fulfilled: Hoàn thành (resolve)
// 3. Rejected: Từ chối
//
// .then : sau đó , kế đó
// .catch : chụp lấy , bắt lấy (dùng bắt lỗi sai )
// .finally : cuối cùng

// English
// Giải quyết: resolve
// Từ chối : reject()

var promise = new Promise(
    // Executor
    function(resolve, reject) {
        resolve( [
            {
                id: 1,
                name: 'Javascript'
            }
        ]);

        // nếu ở trên mà có lỗi thì mới lọt xuống reject
         reject('Dùng  để bắt lỗi');
         // reject bị sai nhưng  resolve đúng thì resolve vẫn đc hoạt động


    }
);

promise
    .then(function (courses){  // là resolve , reject
        // console.log('Successully!');
         console.log(courses);
    })
    .catch(function (error){
        console.log('Failure!');
        // console.log(error);
    })
    .finally(function (){
        console.log('Done!');
    });

// Fake call API
// resolve(123);
// reject();
// reject('Co loi');
//  Tóm tắt:


// 1. New Promise : Tạo promise
// 2. Executor: Người thực thi (thực thi)

// 3. goi ra promise
// .then : sau đó , kế đó (chạy thành công)
// .catch : chụp lấy , bắt lấy (dùng bắt lỗi sai )

// Câu văn tóm tắt : Tạo Promise để thực thi promise đúng thì được chạy  , sai thì bắt lại
