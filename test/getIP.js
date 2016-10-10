var getIP = require('../getIP');
var assert = require('assert');

var ip = getIP()

assert(ip.length > 0, 'should get ip');