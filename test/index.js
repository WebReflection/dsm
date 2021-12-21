const {Map, WeakMap, Set, WeakSet} = require('../cjs');

const obj = {};

console.assert((new Map).set('key', 1) === 1);
console.assert((new WeakMap).set(obj, 2) === 2);
console.assert((new Set).add(3) === 3);
console.assert((new WeakSet).add(obj) === obj);
