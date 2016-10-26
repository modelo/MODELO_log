var winston = require('winston');
require('winston-daily-rotate-file');
var getIP = require('./getIP');
var path = require('path');
var fs = require('fs');
var filterSensitive = require('./filterSensitive')

var logPath = path.join(process.cwd(), '/logs');

// generate dir if logPath not exist
if (!fs.existsSync(logPath)) {
    fs.mkdirSync(logPath);
}

var ip = getIP();

var timestamp = function() {
    return new Date().toISOString().slice(11, 23)
}

var formatter = function(options) {
    var firstSpace = options.message.indexOf(' ');
    var level = (options.level + ': ').slice(0, 6);
    var tag = (options.message.slice(0, firstSpace) + '     ').slice(0, 5);
    var message = options.message.slice(firstSpace + 1);
    return options.timestamp() + ' ' + level + '[' + tag + '] ' + message +
        (options.meta && Object.keys(options.meta).length ? ' ' + JSON.stringify(options.meta) : '');
}

var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            timestamp: timestamp,
            formatter: formatter
        }),
        new winston.transports.DailyRotateFile({
            timestamp: timestamp,
            formatter: formatter,
            filename: path.join(logPath, ip),
            datePattern: '-yyyy-MM-dd.txt', // switch file daily
            maxsize: 1024 * 1024 * 50, // 50MB
            json: false
        })
    ]
});

logger.setOutput = function(options) {
    // assert options
    var validOptions = ['console', 'file']
    Object.keys(options).forEach(function(option) {
        if (validOptions.indexOf(option) === -1) {
            throw new Error('modelo-log: wrong option format')
        }
    })

    if (options.console === false) {
        this.remove(winston.transports.Console)
    }
    if (options.file === false) {
        this.remove(winston.transports.DailyRotateFile)
    }
}

logger.filterSensitive = filterSensitive;

module.exports = logger;