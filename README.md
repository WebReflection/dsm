# Direct Set / Map

[![build status](https://github.com/WebReflection/dsm/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/dsm/actions) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/dsm/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/dsm?branch=main)

This module simply exports *Map*, *WeakMap*, *Set*, and *WeakSet* extends with either `set(key, value)` or `add(value)` that returns the value itself, instead of the *map* or *set*.

```js
import {Map, WeakMap, Set, WeakSet} from '@webreflection/dsm';

const obj = {};
console.assert((new Map).set('key', 1) === 1);
console.assert((new WeakMap).set(obj, 2) === 2);
console.assert((new Set).add(3) === 3);
console.assert((new WeakSet).add(obj) === obj);
```
