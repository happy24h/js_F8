// do/while loop
/*
var i = 0;

do {
    i++;
    console.log(i);

}while (i < 10);

 */
var i = 0;
var isSuccess = false;

do {
    i++;
    console.log('Nap the lan ' + i);
    // Thanh cong
    if (false) {
        isSuccess = true;
    }

}while (!isSuccess && i <= 3);