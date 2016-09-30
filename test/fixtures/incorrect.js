// Avoid extra `no-unused-vars` violations.
function noop() {
  // do nothing
}

// `array-bracket-spacing`.
noop([ 'bar', 'foo']);

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
  curly = false

// `dot-notation`.
const dotNotation = {};

dotNotation['foo'] = 'bar';

// `id-match`.
let id_match;

noop(id_match);

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
const newCap = new cap();

// `newline-after-var`.
const newLineAfterVar = 'foo';
noop(newLineAfterVar);

// `no-class-assign`.
class NoClassAssign { }

NoClassAssign = 'foobar';

noop(NoClassAssign);

// `no-const-assign`.
const noConstAssign = true;

noConstAssign = false;

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
noLabels:
  while (noLabels) {
    break noLabels;
  }

// `no-mixed-spaces-and-tabs`.
const noMixedSpacesAndTabs = {
  bar: 'foo',
  foo: 'bar'
};

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
    this._foo = 'bar';
  }
}

const noUnderscoreDangle1 = { _foo: 'bar' };
const noUnderscoreDangle2 = {};

noUnderscoreDangle2._foo = 'bar';

noop(NoUnderscoreDangle);
noop(noUnderscoreDangle1);
noop(noUnderscoreDangle2);

// `object-curly-spacing`.
const objectCurlySpacing = {foo: 'bar'};

noop(objectCurlySpacing);

// `one-var`.
const oneVar1 = 'foo', oneVar2 = 'bar';

noop(oneVar1);
noop(oneVar2);

// `one-var-declaration-per-line`.
const oneVar1 = 'foo'; const oneVar2 = 'bar';

noop(oneVar1);
noop(oneVar2);

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

// `semi`.
noop()

// `semi-spacing`.
for (let semiSpacing = 0;semiSpacing < 10;++semiSpacing) {
  noop();
}

// `sort-imports`.
import { sortImport2, sortImport3 } from 'sort-import';
import { sortImport1 } from 'sort-import1';

noop(sortImport1);
noop(sortImport2);
noop(sortImport3);

// `sorting/sort-object-props`.
const sortObjectProps1 = 'foo';
const sortObjectProps2 = 'bar';

const sortObjectProps = {
  [`${sortObjectProps2}`]: 'bar',
  [`${sortObjectProps1}`]: 'foo'
};

noop(sortObjectProps);

// `space-before-blocks`.
let spaceBeforeBlocks = true;

if (spaceBeforeBlocks){
  spaceBeforeBlocks = false;
}else{
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
