/*jshint node:true, mocha:true */

'use strict';

require('should');

var fn = require('../src/');

describe('runtime to seconds', function() {
  it('should be unary', function() {
    fn.length.should.be.exactly(1);
  });

  it('converts hh:mm:ss or mm:ss to seconds', function() {
    fn('1:25:46').should.be.exactly(5146);
    fn('25:46').should.be.exactly(1546);
    fn('46').should.be.exactly(46);
  });
});
