'use strict';

var add = require('./add');
var extract = require('./extract');
var replace = require('./replace');
var remove = require('./remove');
var Chain = require('./Chain');

module.exports = {
  add: add,
  extract: extract,
  replace: replace,
  remove: remove,
  Chain: Chain
};

