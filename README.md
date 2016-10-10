modelo-log is a quick wrap of [winston](https://github.com/winstonjs/winston) for our use in modelo

## Install

```bash
npm install modelo-log
```

## Features

1. Save daily logs to `${process.cwd()}/logs/hostIp-date.txt`

    > sample filename: `10.10.11.11-2016-10-08.txt`

1. print to console

## Example

```js
var logger = require('modelo-log');

logger.info('hello', 'KEY');
// 04:35:34 - info: hello KEY

logger.warn('notice, here is a warning');
// 04:35:34 - warn: notice, here is a warning

logger.error('an error! shit');
// 04:35:34 - error: an error! shit

logger.profile('testTime');
setTimeout(function() {
  logger.profile('testTime');
}, 10);
// 13:37:11 - info: testTime durationMs=11 
```