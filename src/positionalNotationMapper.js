/*jshint node:true */

'use strict';

module.exports = function positionalNotationMapper(base) {
  return function(posValPair) {
    return posValPair[1] * Math.pow(base, posValPair[0]);
  };
};
