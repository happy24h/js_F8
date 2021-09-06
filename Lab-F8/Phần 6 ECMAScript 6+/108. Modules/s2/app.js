import logger from './logger.js';
// import default nên logger.js phải có export default
import  {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js';
// import thường nên constants.js không có export default

logger('Test message...',TYPE_WARN);


// import logger from './logger.js';
// import * as constants from './constants.js';
// // cách sử dụng import default mà không cần trả export default
//
// console.log(constants);