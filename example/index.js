var logger = require('modelo-log')

logger.info('hello','tim')

console.log(logger.filterSensitive({password:'1231231'}));