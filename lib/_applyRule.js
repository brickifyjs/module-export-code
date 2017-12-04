'use strict';

var NULL = null;

function applyRule(from, rule, by) {
  if (by === NULL) {
    var match = from.match(rule);
    return match && match.join('');
  }

  return from.replace(rule, by);
}

module.exports = applyRule;

