'use strict';

var applyRules = require('./_applyRules');
var NULL = null;

function extract(from, rules) {
  return applyRules(from, rules, NULL);
}

module.exports = extract;
