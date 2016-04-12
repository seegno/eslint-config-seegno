# eslint-config-seegno

Seegno-flavored ESLint config.

## Installation

```sh
$ npm install eslint babel-eslint eslint-plugin-babel eslint-plugin-sort-class-members eslint-config-seegno --save-dev
```

## Usage

Create an `.eslintrc.yml` file with the following:

```yaml
extends: seegno
```

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

and run the linter with:

```sh
$ npm run lint
```
