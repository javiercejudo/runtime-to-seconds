/*jshint node:true, mocha:true */

'use strict';

require('should');

var runtimeToSeconds = require('../src/');

describe('runtime to seconds', function() {
  it('converts hh:mm:ss or mm:ss to seconds', function() {
    runtimeToSeconds('1:25:46').should.be.exactly(5146);
    runtimeToSeconds('25:46').should.be.exactly(1546);
    runtimeToSeconds('46').should.be.exactly(46);
  });
});
