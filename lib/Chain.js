'use strict';

var add = require('./add');
var extract = require('./extract');
var replace = require('./replace');
var remove = require('./remove');

function Chain(content) {
  this.content = content;

  return this;
}

Chain.prototype.add = function (rules, byBefore, byAfter) {
  this.content = add.call(this, this.content, rules, byBefore, byAfter);
  return this;
};

Chain.prototype.extract = function (rules) {
  this.content = extract.call(this, this.content, rules);
  return this;
};
Chain.prototype.replace = function (rules, by) {
  this.content = replace.call(this, this.content, rules, by);
  return this;
};
Chain.prototype.remove = function (rules) {
  this.content = remove.call(this, this.content, rules);
  return this;
};

module.exports = Chain;
