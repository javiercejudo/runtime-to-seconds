/*jshint node:true */

'use strict';

var SEPARATOR = ':';

function smhToSeconds(pUnit, cUnit, index) {
  return pUnit + cUnit * Math.pow(60, index);
}

function hmsTosmh(str) {
  return str.split(SEPARATOR)
    .reverse()
    .map(Number);
}

module.exports = function(runtime) {
  return hmsTosmh(runtime).reduce(smhToSeconds);
};
