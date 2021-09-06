var haha = document.querySelectorAll('ul');

haha[0].innerHTML = '<li>ok</li> <li>ok</li> <li>ok</li>'

var ulElement = document.querySelectorAll('div > ul')

ulElement[0].innerHTML = `<li> text </li> <li> text </li> <li> text </li>`
ulElement[1].outerHTML = `<h1> heading </h1>`
