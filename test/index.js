var logger = require('../index');

logger.info('hi,lo');
logger.warn('hey');
logger.error('ba');

logger.profile('testTime');
setTimeout(function() {
  logger.profile('testTime');
}, 10);
