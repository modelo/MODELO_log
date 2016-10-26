var getIP = require('../src/getIP');
var should = require('should')

describe('getIP.js', function () {
  
  it('should get IP', function () {
    getIP().length.should.above(4)
  });
  
});
