# test-arg

<p align="center">
  <a href="https://travis-ci.org/pablopunk/test-arg"><img src="https://img.shields.io/travis/pablopunk/test-arg.svg" /> </a>
  <a href="https://codecov.io/gh/pablopunk/test-arg"><img src="https://img.shields.io/codecov/c/github/pablopunk/test-arg.svg" /> </a>
  <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" /> </a>
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/test-arg"><img src="https://img.shields.io/npm/dt/test-arg.svg" /></a>
</p>

<p align="center">
  <i>Return true if arguments are provided</i>
</p>


> Turns out `undefined == undefined` is true, but `undefined <= undefined` is not.


## Install

```sh
npm install test-arg
```


## Usage

```js
const testArg = require('test-arg')
testArg('hi') // true
testArg(null) // true
testArg() // false
```


## License

MIT


## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100)           |
| --------------------------------- |
| [Pablo Varela](https://pablo.life)   |

