var should = require('should')
var filterSensitive = require('../src/filterSensitive');

var logObj = {
  username: 'Tim',
  password: 'lilllla',
  credit: '4564188001337578'
}

describe('filterSensitive.js', function () {
  
  it('should filter out password and credit card num', function () {
    filterSensitive(logObj).password.should.equal('******');
    filterSensitive(logObj).credit.should.equal('************7578');
  });
  
});
