'use strict';

var applyRule = require('./_applyRule');
var INSTANCE_ARRAY = Array;
var NULL = null;

function applyRules(from, rules, by) {
  var content = by === NULL ? '' : from;
  var fromContent = by === NULL ? from : content;

  if (rules instanceof INSTANCE_ARRAY) {
    for (var i = 0, len = rules.length; i < len; i++) {
      if (by === NULL) {
        content += applyRule(fromContent, rules[i], by);
      } else {
        content = applyRule(fromContent, rules[i], by);
      }
    }
  } else {
    content = applyRule(fromContent, rules, by);
  }

  return content;
}

module.exports = applyRules;
