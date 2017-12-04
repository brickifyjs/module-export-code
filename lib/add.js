'use strict';

var replace = require('./replace');

function add(from, rules, byBefore, byAfter) {
  return replace(from, rules, ( byBefore || '') + '$&' + (byAfter || ''));
}

module.exports = add;
