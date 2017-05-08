// Avoid extra `no-unused-vars` violations.
function noop() {
  // do nothing
}

// `array-bracket-spacing`.
noop([ 'bar', 'foo']);

// `arrow-parens`
noop((foo) => noop(foo));

// `brace-style`.
try {
  noop();
}
catch (e) {
  noop();
}

// `comma-dangle`.
noop({ bar: 'foo', foo: 'bar', });

// `comma-spacing`.
noop(['bar','foo']);

// `comma-style`.
noop({
  bar: 'foo'
  , foo: 'bar'
});

// `consistent-this`.
const consistentThis = this;

noop(consistentThis);

// `curly`.
let curly = true;

if (curly)
  curly = false;

// `dot-notation`.
const dotNotation = {};

dotNotation['foo'] = 'bar';

// `generator-star-spacing`
noop(function* () {});
noop(function* foo() {});
noop({ * foo() {} });

// `id-match`.
let id_match;

noop(id_match);

// `indent`.
noop({
    bar: 'foo'
});

// `key-spacing`.
noop({ foo:'bar' });

// `keyword-spacing`.
let keywordSpacing = true;

if(keywordSpacing) {
  keywordSpacing = false;
}

// `mocha/no-exclusive-tests`.
describe.only('noExclusiveTests', () => {
  it('should not work');
});

// `new-cap`.
const cap = require('cap');

new cap();

// `newline-after-var`.
const newLineAfterVar = 'foo';
noop(newLineAfterVar);

// `newline-before-return`.
function funcThatReturns(bar) {
  if (!bar) {
    return;
  }
  return bar;
}

funcThatReturns('foo');

// `no-class-assign`.
class NoClassAssign { }

NoClassAssign = 'foobar';

noop(NoClassAssign);

// `no-const-assign`.
const noConstAssign = true;

noConstAssign = false;

noop(noConstAssign);

// `no-constant-condition`.
if (true) {
  noop(true);
}

// `no-dupe-class-members`.
class NoDupeClassMembers {
  foo() {
    return 'bar';
  }

  foo() {
    return 'foo';
  }
}

noop(NoDupeClassMembers);

// `no-empty`.
try {
  noop();
} catch (e) {}

// `no-labels`.
noLabels: {
  break noLabels;
}

// `no-multi-spaces`.
noop(['foo',  'bar']);

// `no-multi-str`.
const noMultiStr = 'Line 1 \
  Line 2';

noop(noMultiStr);

// `no-multiple-empty-lines`.
const noMultipleEmptyLines = true;


noop(noMultipleEmptyLines);

// `no-spaced-func`.
noop ();

// `no-this-before-super`.
const NoThisBeforeSuper = require('no-this-before-super');

class Child extends NoThisBeforeSuper {
  constructor() {
    this.foo = 'bar';
    super();
  }
}

noop(Child);

// `no-underscore-dangle`.
class NoUnderscoreDangle {
  constructor() {
    this._foo();
  }
}

noop(new NoUnderscoreDangle());

// `no-unused-vars`
const foobar = '';

// `object-curly-spacing`.
const objectCurlySpacing = {foo: 'bar'};

noop(objectCurlySpacing);

// `one-var`.
const oneVar1 = 'foo', oneVar2 = 'bar';

noop(oneVar1);
noop(oneVar2);

// `one-var-declaration-per-line`.
const oneVarDeclarationPerLine1 = 'foo'; const oneVarDeclarationPerLine2 = 'bar';

noop(oneVarDeclarationPerLine1);
noop(oneVarDeclarationPerLine2);

// `operator-linebreak`.
const operatorLineBreak = 1 +
  2;

noop(operatorLineBreak);

// `padded-blocks`.
const paddedBlocks = true;

if (paddedBlocks) {

  noop();

}

// `quote-props`.
const quoteProps = {
  '0': 0,
  'foo': 0,
  'foo-bar': 0,
  'null': 0,
  'true': 0
};

noop(quoteProps);

// `quotes`.
const quotes = "foo";

noop(quotes);

// `require-await`.
(async () => {})();

// `semi`.
noop()

// `semi-spacing`.
for (let semiSpacing = 0;semiSpacing < 10;++semiSpacing) {
  noop();
}

// `sort-imports`.
import import1 from 'import-1';
import { import2 } from 'import-2';

noop(import1);
noop(import2);

// `sort-keys`.
const sortObjectProps = {
  var1: 'foo',
  var10: 'bar',
  var9: 'biz'
};

noop(sortObjectProps);

// `space-before-blocks`.
let spaceBeforeBlocks = true;

if (spaceBeforeBlocks){
  spaceBeforeBlocks = false;
} else {
  spaceBeforeBlocks = true;
}

// `space-before-function-paren`.
(function () {
  noop();
})();

// `space-in-parens`.
noop( 'foo' );

// `space-infix-ops`.
const spaceInfixOps = 1+2;

noop(spaceInfixOps);

// `space-unary-ops`.
let spaceUnaryOps1 = 1;
const spaceUnaryOps2 = ++ spaceUnaryOps1;

noop(spaceUnaryOps2);

// `spaced-comment`.
//Comment missing space.

// `sql-template/no-unsafe-query`.
const db = {
  query: noop()
};
const foo = 'foo';

db.query(`SELECT ${foo} FROM bar`);

// `template-curly-spacing`.
const templateCurlySpacing = 'foo';

noop(`${ templateCurlySpacing }`);

// `wrap-iife`.
(function() {
  noop();
}());

// `yoda`.
let yoda = true;

if (true === yoda) {
  yoda = false;
}
