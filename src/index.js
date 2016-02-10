/*jshint node:true */

'use strict';

var R = require('./R');

module.exports = R.pipe(
  R.split(':'),
  R.reverse,
  R.map(Number),
  R.addIndex(R.map)(function(val, index) {
    return val * Math.pow(60, index);
  }),
  R.reduce(R.add, 0)
);
