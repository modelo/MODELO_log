var logger = require('../src/index');

logger.info('[TAG]', 'this is a message');

logger.warn('[TAGE2]', 'notice, here is a warning');

logger.error('[HTTP]', 'an error! shit', {a: 3});

logger.profile('testTime');
setTimeout(function() {
    logger.profile('testTime');
}, 10);

logger.setOutput({
    console: false,
    file: true,
})

logger.info('this info will only show up in file');