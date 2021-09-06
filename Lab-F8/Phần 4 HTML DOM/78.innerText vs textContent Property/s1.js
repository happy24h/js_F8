// Element
// Attribute
// Text

// InnerText, textContent
// geter : dùng để lấy doi tuong
// seter : dùng để đặt lại doi tuong

var headingElement = document.querySelector('.heading');

// geter (giúp lấy giá trị ) hay ( nhận giá trị đó)
//  console.log(headingElement.innerText);
// lấy thuộc tính class trong element

// console.log(headingElement.textContent);
// lấy thuộc tính class trong element

// seter (đặt lại giá trị), (thay đổi giá trị)
// headingElement.innerText = 'New heading'; // sửa text trong html
// headingElement.textContent = 'New heading'; // sửa text trong html


 // headingElement.textContent = '<i>New Heading</i>';

 headingElement.innerText = `
 
 New Heading
 `;

