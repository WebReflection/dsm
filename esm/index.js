class M extends Map {
  set(key, value) {
    super.set(key, value);
    return value;
  }
}

class WM extends WeakMap {
  set(key, value) {
    super.set(key, value);
    return value;
  }
}

class S extends Set {
  add(value) {
    super.add(value);
    return value;
  }
}

class WS extends WeakSet {
  add(value) {
    super.add(value);
    return value;
  }
}

export {
  M as Map,
  WM as WeakMap,
  S as Set,
  WS as WeakSet
};
