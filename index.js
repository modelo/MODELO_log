var winston = require('winston');
require('winston-daily-rotate-file');
var getIP = require('./getIP');
var path = require('path');
var fs = require('fs');

var logPath = path.join(process.cwd(), '/logs');

// generate dir if logPath not exist
if (!fs.existsSync(logPath)) {
    fs.mkdirSync(logPath);
}

var ip = getIP();

var timestamp = function() {
    var now = new Date()
    return now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
}

var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            timestamp: timestamp
        }),
        new winston.transports.DailyRotateFile({
            timestamp: timestamp,
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
        logger.remove(winston.transports.Console)
    }
    if (options.file === false) {
        logger.remove(winston.transports.DailyRotateFile)
    }
}

module.exports = logger;