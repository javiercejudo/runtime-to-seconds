/*jshint node:true */

'use strict';

var R = Object.freeze({
  pipe: require('ramda/src/pipe'),
  split: require('ramda/src/split'),
  reverse: require('ramda/src/reverse'),
  map: require('ramda/src/map'),
  addIndex: require('ramda/src/addIndex'),
  reduce: require('ramda/src/reduce')
});

module.exports = R.pipe(
  R.split(':'),
  R.reverse,
  R.map(Number),
  R.addIndex(R.reduce)(function(acc, val, index) {
    return acc + val * Math.pow(60, index);
  }, 0)
);
