/*jshint node:true */

'use strict';

var R = require('./R');
var positionalNotationMapper = require('./positionalNotationMapper');

module.exports = R.pipe(
  R.split(':'),
  R.reverse,
  R.toPairs,
  R.map(R.map(Number)),
  R.map(positionalNotationMapper(60)),
  R.sum
);
