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

logger.info('hello','tim')
// print on console: info: hello tim
// saved in file: 2016-10-10T04:35:34.070Z - info: hello tim

// other two frequently used api
logger.warn('notice, here is a warning');
logger.error('an error! shit');
```