# requireable

> Enables a module to require itself

[![Build Status](https://travis-ci.org/lukechilds/requireable.svg?branch=master)](https://travis-ci.org/lukechilds/requireable)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/requireable/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/requireable?branch=master)
[![npm](https://img.shields.io/npm/v/requireable.svg)](https://www.npmjs.com/package/requireable)

Mocks the require command to include the current package when the the `name` from the current packages `package.json` is required.

Especially useful in tests if you want to require the package you're testing by name rather than relative paths.

## Install

```shell
npm install --save-dev requireable
```

## Usage

```js
require('requirable');
```

That's it! You can now do `require('package-name')`.

## AVA Usage

Some tests runners such as AVA can require packages automatically for you. If you're using AVA add the following to your package.json:

```json
"ava": {
  "require": [
    "requireable"
  ]
},
 ```

 You can now `require` your package in your AVA tests.

## License

MIT © Luke Childs
