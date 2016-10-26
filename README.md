modelo-log is a quick wrap of [winston](https://github.com/winstonjs/winston) for our use in modelo

## Install

```bash
npm install modelo-log
```

## Features

1. Save daily logs to `${process.cwd()}/logs/hostIp-date.txt`

    > sample filename: `10.10.11.11-2016-10-08.txt`

1. customize output ways


## Sample usage

```js
var logger = require('modelo-log');
logger.setOutput({
  // default options
  console: true,
  file: true
})

logger.info('TAG', 'this is a message');
// 07:31:26 info: [TAG  ] this is a message

logger.warn('TAGE2', 'notice, here is a warning');
// 07:31:26 warn: [TAGE2] notice, here is a warning

logger.error('HTTP', 'an error! shit');
// 07:31:26 error:[HTTP ] an error! shit

logger.profile('testTime');
setTimeout(function() {
  logger.profile('testTime');
}, 10);
// 07:28:38 info: [testT] testTime {"durationMs":13}
```

### Note
The first argument represent TAG of the log