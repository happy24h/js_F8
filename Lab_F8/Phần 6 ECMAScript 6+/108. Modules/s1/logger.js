// function logger(log, type = 'log') {
//     console[type](log);
// }
export const TYPE_LOG = 'log'; // có thể export vô số export thường
export const TYPE_WARN = 'warn';
export const TYPE_ERROR = 'error';
function logger(log, type = TYPE_LOG ){
    console[type](log);

}


export default logger; // module chi duoc 1 export default