// Avoid extra `no-unused-vars` violations.
function noop() {
  // do nothing
}

// `array-bracket-spacing`, `comma-spacing` and `no-multi-spaces`.
noop(['bar', 'foo']);

// `comma-dangle`, `comma-style` and `sorting/sort-object-props`.
noop({ bar: 'foo', foo: 'bar' });

// `consistent-this`.
const self = this;

noop(self);

// `curly`, `keyword-spacing`, `no-empty` and `space-before-blocks`.
let mixedRules = true;

if (mixedRules) {
  mixedRules = false;
} else {
  mixedRules = true;
}

// `dot-notation`.
const dotNotation = {};

dotNotation.foo = 'bar';

// `id-match`.
let idmatch;
let idMatch;
let IdMatch;
let IDMatch;
let IDMATCH;
let ID_MATCH;
let ID_M_ATCH;

noop(idmatch);
noop(idMatch);
noop(IdMatch);
noop(IDMatch);
noop(IDMATCH);
noop(ID_MATCH);
noop(ID_M_ATCH);

// `key-spacing`.
noop({ foo: 'bar' });

// `lines-around-comment`

noop();

// Comment.
noop();

// `mocha/no-exclusive-tests`.
describe('noExclusiveTests', () => {
  it('should work');
});

// `new-cap`.
const Cap = require('cap');
const newCap = new Cap();

noop(newCap);

// `no-class-assign`.
class NoClassAssign { }

noop(NoClassAssign);

// `no-const-assign`.
let noConstAssign = true;

noConstAssign = false;

noop(noConstAssign);

// `no-constant-condition`.
const noConstantCondition = true;

if (noConstantCondition) {
  noop(noConstantCondition);
}

// `no-dupe-class-members`.
class NoDupeClassMembers {
  bar() { return 'bar'; }
  foo() { return 'foo'; }
}

noop(NoDupeClassMembers);

// `no-labels`.
const noLabels = { label: true };

while (noLabels.label) {
  break;
}

// `no-multi-str`.
const noMultiStr = `Line 1
  Line 2`;

noop(noMultiStr);

// `no-multiple-empty-lines`.
const noMultipleEmptyLines = true;

noop(noMultipleEmptyLines);

// `no-spaced-func`.
noop();

// `no-this-before-super`.
const NoThisBeforeSuper = require('no-this-before-super');

class Child extends NoThisBeforeSuper {
  constructor() {
    super();
    this.foo = 'bar';
  }
}

noop(Child);

// `no-underscore-dangle`.
class NoUnderscoreDangle {
  constructor() {
    this._foo = 'bar';
  }
}

noop(NoUnderscoreDangle);

// `object-curly-spacing`.
const objectCurlySpacing1 = { foo: 'bar' };
const objectCurlySpacing2 = {};

noop(objectCurlySpacing1);
noop(objectCurlySpacing2);

// `one-var`.
const oneVar1 = 'foo';
const oneVar2 = 'bar';

noop(oneVar1);
noop(oneVar2);

// `operator-linebreak`.
const operatorLineBreak = 1 + 2;

noop(operatorLineBreak);

// `padded-blocks`.
const paddedBlocks = true;

if (paddedBlocks) {
  noop();
}

// `quote-props`.
const quoteProps = {
  0: 0,
  foo: 0,
  'foo-bar': 0,
  null: 0,
  true: 0
};

noop(quoteProps);

// `quotes`.
const quotes1 = 'foo';
const quotes2 = `foo`;

noop(quotes1);
noop(quotes2);

// `semi`.
noop();

// `semi-spacing`.
for (let semiSpacing = 0; semiSpacing < 10; ++semiSpacing) {
  noop();
}

// `sort-imports`.
import SortImport1 from 'sort-import1';
import { sortImport2 } from 'sort-import2';
import sortImport4 from 'sort-import4';
import { sortImport3, sortImport5 } from 'sort-import';

noop(SortImport1);
noop(sortImport2);
noop(sortImport3);
noop(sortImport4);
noop(sortImport5);

// `space-before-function-paren`.
(function() {
  noop();
})();

// `space-in-parens`.
noop('foo');

// `space-infix-ops`.
const spaceInfixOps = 1 + 2;

noop(spaceInfixOps);

// `space-unary-ops`.
let spaceUnaryOps1 = 1;
const spaceUnaryOps2 = ++spaceUnaryOps1;

noop(spaceUnaryOps2);

// `spaced-comment`.
// spaced comment.

// `template-curly-spacing`.
const templateCurlySpacing = 'foo';

noop(`${templateCurlySpacing}`);

// `wrap-iife`.
(function() {
  noop();
})();

// `yoda`.
let yoda = true;

if (yoda === true) {
  yoda = false;
}
