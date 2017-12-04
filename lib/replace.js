'use strict';

var applyRules = require('./_applyRules');

function replace(from, rules, by) {
  return applyRules(from, rules, by);
}

module.exports = replace;
