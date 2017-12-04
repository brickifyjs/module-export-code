'use strict';

var applyRules = require('./_applyRules');

function remove(from, rules) {
  return applyRules(from, rules, '');
}

module.exports = remove;
