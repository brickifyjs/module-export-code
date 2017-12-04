'use strict';

var o = require('ospec');
var code = require('../lib');

o.spec('API', function () {
  o('.add() should add content', function () {
    var content = 'var foo = [0,1,0,1,0,1,0,1];';
    var before = '/* Comment before */\n';
    var after = '/* Comment after */\n';
    o(code.add(content, /.+/, before)).equals(before + content);
    o(code.add(content, /.+/, null, after)).equals(content + after);
    o(code.add(content, /.+/, before, after)).equals(before + content + after);
    o(code.add(content, [/.+/], before, after)).equals(before + content + after);
  });

  o('.remove() should remove content', function () {
    var content = '//removeCode\nfoo = [0,1,0,1,0,1,0,1];\n//endRemoveCode';
    o(code.remove(content, /\/\/removeCode(.|\s)+\/\/endRemoveCode/)).equals('');
    o(code.remove(content, [/\/\/removeCode(.|\s)+\/\/endRemoveCode/])).equals('');
  });

  o('.replace() should remove content', function () {
    var content = 'foo = [0,1,0,1,0,1,0,1];';
    o(code.replace(content, /0/g, 1)).equals('foo = [1,1,1,1,1,1,1,1];');
    o(code.replace(content, [/0/g], 1)).equals('foo = [1,1,1,1,1,1,1,1];');
  });

  o('.extract() should extract content', function () {
    var content = 'foo = [0,1,0,1,0,1,0,1];\nbar = [1,0,1,0,1,0,1,0];';
    o(code.extract(content, /bar[^;]+;/)).equals('bar = [1,0,1,0,1,0,1,0];');
    o(code.extract(content, [/bar[^;]+;/])).equals('bar = [1,0,1,0,1,0,1,0];');
  });

  o('Chain can chain string methods', function () {
    var content = '//removeCode\nfoo = [0,1,0,1,0,1,0,1];\nbar = [1,0,1,0,1,0,1,0];\n//endRemoveCode';
    var chain = new code.Chain(content);

    o(chain
      .replace(/0/g, 1)
      .remove(/\/\/removeCode(.|\s)+\/\/endRemoveCode/)
      .add(/.*/, '/* Comment before */\n', '/* Comment after */\n')
      .extract(/(.|\s)+/g)
      .content
    ).equals('/* Comment before */\n/* Comment after */\n');
  });
});
