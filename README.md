> modelo-log is a quick wrap of [winston](https://github.com/winstonjs/winston) for our use in modelo

## Install

```bash
npm install modelo-log
```

## Features

1. customize output ways (to console or/and log file)
1. Save daily logs to `${process.cwd()}/logs/hostIp-date.txt`; sample filename: `10.10.11.11-2016-10-08.txt`

## util functions

- filterSensitive()

  ```js
  var logger = require('modelo-log');
  logger.filterSensitive({username: abc, password: abcdefg, credit: '4564188001337578'})
  // return {username: abc, password: ******, credit: '************7578'}
  ```

## Sample usage

```js
var logger = require('modelo-log');
logger.setOutput({
  // default options
  console: true,
  file: true
})

logger.info('[TAG]', 'this is a message');
// 2016-11-14T12:47:32.204Z info: [TAG] this is a message

logger.warn('[TAGE2]', 'notice, here is a warning');
// 2016-11-14T12:47:32.204Z warn: [TAGE2] notice, here is a warning

logger.error('[HTTP]', 'an error! shit');
// 2016-11-14T12:47:32.204Z error:[HTTP] an error! shit

logger.profile('testTime');
setTimeout(function() {
  logger.profile('[testTime]');
}, 10);
// 2016-11-14T12:47:32.204Z info: [testTime] testTime {"durationMs":13}
```

### Note
The first argument represent TAG of the log