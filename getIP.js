var os = require('os');
var ifaces = os.networkInterfaces();

function getIP() {
    var ip = '';

    Object.keys(ifaces).forEach(function(ifname) {
        ifaces[ifname].forEach(function(iface) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            if (iface.family === 'IPv4' && iface.internal === false) {
                ip = iface.address;
            }
        });
    });

    return ip;
}

module.exports = getIP;