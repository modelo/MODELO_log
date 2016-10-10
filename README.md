modelo-log is a quick wrap of [winston]() for our use in modelo

## Install

```bash
npm install modelo-log
```

## Features

1. Save daily logs to `${process.cwd()}/logs/ip-date.txt`
1. print to console

## Example

```js
var logger = require('modelo-log');
logger.info('hello','tim')
// 2016-10-10T04:35:34.070Z - info: hello tim
logger.warn('notice, here is a warning');
logger.error('an error! shit');
```