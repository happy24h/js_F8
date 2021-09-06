var courses = [
    {
        id: 1,
        name: ' Javascript',
        coin: 100,

    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 200,

    },
    {
        id: 3,
        name: 'Ruby',
        coin: 300
    },

];

var i = 0 ;
var totalCoin = courses.reduce(function(total,course){
    i++;
    console.log(i, total);
    return total + course.coin;
}); // initial value
 console.log(totalCoin);


/*
var numbers = [100, 200 ,220, 200, 480];

var totalCoin = numbers.reduce(function(total,number){
    return total + number;
});
console.log(totalCoin);

 */
// Flat - " Làm phẳng " mảng từ Depth array - "Mảng sâu
/*
var depthArray = [1, 2, [3,4], 5, 6, [7, 8,9]];
var flatArray = depthArray.reduce(function (flatOutput,depthItem){
    return flatOutput.concat(depthItem);

},[]);
console.log(flatArray);

 */

// Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    },
];

var newCourses = topics.reduce(function (course,topic){
    return courses.concat(topic.courses);
},[]);

// console.log(newCourses);



var htmls = newCourses.map(function (course){
     return `
     <div>
     <h2>${course.title}</h2>
     <p>ID: ${course.id}</p>
</div>
`;
 });
 console.log(htmls);



