var winston = require('winston');
require('winston-daily-rotate-file');
var getIP = require('./getIP');
var path = require('path');
var fs = require('fs');

var logPath = path.join(process.cwd(), '/logs')
if (!fs.existsSync(logPath)) {
    fs.mkdirSync(logPath);
}

var ip = getIP();

var timstamp = function() {
    var now = new Date()
    return now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
}

var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)({
            timestamp: timestamp
        }),
        new(winston.transports.DailyRotateFile)({
            timestamp: timestamp,
            filename: path.join(logPath, ip),
            datePattern: '-yyyy-MM-dd.txt', // switch file daily
            maxsize: 1024 * 1024 * 50, // 50MB
            json: false
        })
    ]
});

module.exports = logger;