// Modules: Import / Export
//
// import logger from './logger.js' ;
 // console.log( logger1);
// logger('Test message...', 'warn');

import logger, {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './logger.js';

logger('Test message...',TYPE_WARN)