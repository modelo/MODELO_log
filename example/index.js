var logger = require('modelo-log')

logger.info('[hello]','tim', 'asdfa', 'adfasdf', 'as');

logger.info('[hu]', logger.filterSensitive({password:'1231231', credit: '4564188001337578',c: {a:1, user:{alpha:'hi'}}}));