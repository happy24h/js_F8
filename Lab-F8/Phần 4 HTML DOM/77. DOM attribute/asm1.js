// bài 1
document.querySelector('h1').title = 'Học lập trình tại F8'
document.querySelector('div').className = 'box'
document.querySelector('img').width = 100

// bài 2
var f8LinkElement = document.querySelectorAll('a')[0] // lấy NodeList
var f8ShortLink = f8LinkElement.getAttribute('href')
document.querySelectorAll('a')[1].href = f8ShortLink
document.querySelector('div').setAttribute('data-url', f8ShortLink)

