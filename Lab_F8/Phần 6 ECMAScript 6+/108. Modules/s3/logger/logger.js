import { TYPE_LOG } from '../constants.js';
function logger(log, type = TYPE_LOG ){
    console[type](log);
}

export default logger; // module chi duoc 1 export default