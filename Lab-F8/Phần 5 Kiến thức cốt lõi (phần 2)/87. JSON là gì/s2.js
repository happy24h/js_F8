// Stringify : Từ Javascript types -> JSON

console.log(JSON.stringify(true)); //> true

console.log(typeof JSON.stringify(null)); //> string


console.log(JSON.stringify([
    'Javascript',
    'PHP'
])); //> ["Javascript","PHP"]

console.log(JSON.stringify({
    name: 'Viet Anh',
    age: 16,
    test: function() {}
})); //> {"name":"Viet Anh","age":16}

