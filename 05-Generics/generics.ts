//> Types made from types

//* T - TypeParam

interface Dicts<T> {
  [k: string]: T;
}

// Array.prototype.map, but for Dict
function mapDict<T, U>(input: Dicts<T>, mappingCb: (arg: T) => U): Dict<U> {
  return {};
}

// Array.prototype.filter, but for Dict
function filterDict<T>(
  input: Dicts<T>,
  filterCb: (arg: T) => boolean
): Dict<T> {
  return {};
}

// Array.prototype.reduce, but for Dict
function reduceDict<T, V>(
  input: Dicts<T>,
  reducer: (curr: V, item: T) => V,
  initialValue: V
): V {
  return initialValue;
}
