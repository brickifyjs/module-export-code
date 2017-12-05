## Module Hook

Strings manipulation API

## Statistics

[![Github All Releases](https://img.shields.io/github/downloads/brickifyjs/module-string/total.svg?style=flat-square)](https://github.com/brickifyjs/module-string)
[![npm](https://img.shields.io/npm/dt/@brickify/m-string.svg?style=flat-square)](https://www.npmjs.com/package/@brickify/m-string)

## Social
[![GitHub forks](https://img.shields.io/github/forks/brickifyjs/module-string.svg?label=Fork&style=flat-square)](https://github.com/brickifyjs/module-string)
[![GitHub stars](https://img.shields.io/github/stars/brickifyjs/module-string.svg?label=Stars&style=flat-square)](https://github.com/brickifyjs/module-string)
[![GitHub watchers](https://img.shields.io/github/watchers/brickifyjs/module-string.svg?label=Watch&style=flat-square)](https://github.com/brickifyjs/module-string)
[![Gitter](https://img.shields.io/gitter/room/brickifyjs/module-string.svg?style=flat-square)](https://gitter.im/brickifyjs/module-string)

## Project Health

[![Travis branch](https://img.shields.io/travis/brickifyjs/module-string/master.svg?style=flat-square)](https://travis-ci.org/brickifyjs/module-string)
[![Codecov](https://img.shields.io/codecov/c/github/brickifyjs/module-string.svg?style=flat-square)](https://codecov.io/gh/brickifyjs/module-string)
[![bitHound](https://img.shields.io/bithound/dependencies/github/brickifyjs/module-string.svg?style=flat-square)](https://www.bithound.io/github/brickifyjs/module-string/master/dependencies/npm)
[![bitHound](https://img.shields.io/bithound/devDependencies/github/brickifyjs/module-string.svg?style=flat-square)](https://www.bithound.io/github/brickifyjs/module-string/master/dependencies/npm)
[![Website](https://img.shields.io/website/https/m-string.js.brickify.io.svg?label=website&style=flat-square)](https://m-string.js.brickify.io)

## Install

```bash
$ npm install @brickify/m-string
```

## Usage

### Add string

```js
var add = require('@brickify/m-string/add');

var content = 'var foo = [0,1,0,1,0,1,0,1];';
var before = '/* Comment before */\n';
var after = '/* Comment after */\n';

add(content, /.+/, before);
// output: /* Comment before */\nvar foo = [0,1,0,1,0,1,0,1];

add(content, /.+/, null, after);
// output: var foo = [0,1,0,1,0,1,0,1];/* Comment after */\n

add(content, /.+/, before, after);
// output: /* Comment before */\nvar foo = [0,1,0,1,0,1,0,1];/* Comment after */\n

add(content, [/.+/], before, after);
// output: /* Comment before */\nvar foo = [0,1,0,1,0,1,0,1];/* Comment after */\n
```

### Remove string
```js
// TODO JSDOC
remove(content: String, before: String|null, after: String|null|undefined)
```

```js
var remove = require('@brickify/m-string/remove');

var content = '//removeCode\nfoo = [0,1,0,1,0,1,0,1];\n//endRemoveCode';

remove(content, /\/\/removeCode(.|\s)+\/\/endRemoveCode/);
// output: ''

remove(content, [/\/\/removeCode(.|\s)+\/\/endRemoveCode/]);
// output: ''
```

### Replace string
```js
// TODO JSDOC
remove(content: String, before: String|null, after: String|null|undefined)
```

```js
var remove = require('@brickify/m-string/replace');

var content = 'foo = [0,1,0,1,0,1,0,1];';

replace(content, /0/g, 1);
// output: foo = [1,1,1,1,1,1,1,1];

replace(content, [/0/g], 1);
// output: foo = [1,1,1,1,1,1,1,1];
```

### Extract string

```js
var extract = require('@brickify/m-string/extract');

var content = 'foo = [0,1,0,1,0,1,0,1];\nbar = [1,0,1,0,1,0,1,0];';

extract(content, /bar[^;]+;/);
// output: bar = [1,0,1,0,1,0,1,0];

extract(content, [/bar[^;]+;/]);
// output: bar = [1,0,1,0,1,0,1,0];
```

### Chaining

```js
var extract = require('@brickify/m-string/Chain');

var content = '//removeCode\nfoo = [0,1,0,1,0,1,0,1];\nbar = [1,0,1,0,1,0,1,0];\n//endRemoveCode';
var chain = new code.Chain(content);

chain
     .replace(/0/g, 1)
     .remove(/\/\/removeCode(.|\s)+\/\/endRemoveCode/)
     .add(/.*/, '/* Comment before */\n', '/* Comment after */\n')
     .extract(/(.|\s)+/g)
     .content;
    
// output : /* Comment before */\n/* Comment after */\n
```

## Imports

```js
// Import all methods
var lib = require('@brickify/m-string');

// Import add method
var add = require('@brickify/m-string/add');

// Import remove method
var remove = require('@brickify/m-string/remove');

// Import extract method
var add = require('@brickify/m-string/extract');

// Import Chain Class
var Chain = require('@brickify/m-string/Chain');
```

## TODO
* Add JSDoc, comment and Code Signature
