var logger = require('../index');

logger.info('hi,lo');
logger.warn('hey');
logger.error('ba');

logger.profile('testTime');
setTimeout(function() {
    logger.profile('testTime');
}, 10);

logger.setOutput({
    console: false,
    file: true,
})

logger.info('this info will only show up in file');