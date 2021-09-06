const obj = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2:{
            name: 'Dinah2',
            cat3:{
                name: 'Dinah3',
            }
        }
    }
};
if (obj.cat) {
    console.log(obj.cat.cat2.cat3.name);
}

