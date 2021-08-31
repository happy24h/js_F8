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
// if (
//     // obj.cat &&
//     // obj.cat.cat2 &&
//     // obj.cat.cat2.cat3 // Pha xử lý khồng kềnh
// )
if(obj?.cat?.cat2?.cat3 ){  // Pha xử lý gọn gàng
    console.log(obj.cat.cat2.cat3.name);
}

const obj1 = {
    getName(value) {
        console.log(value);
    }
}
obj1.getName?.(123);

