// Incorrect environment-specific (os or editor) setings.

// Avoid extra `no-unused-vars` violations.
function noop() {
  // do nothing
}

// `linebreak-style` - Windows line endings (CRLF).

// `no-mixed-spaces-and-tabs`.
function noMixedSpacesAndTabs() {
	  const foo = 'bar';

		noop(foo);
}

noop(noMixedSpacesAndTabs);

// `eol-last` - no newline at the end of the file.