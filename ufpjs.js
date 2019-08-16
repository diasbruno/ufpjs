const maybe = (dvalue, fn) => (value) => value == null ? dvalue : fn(value);
exports.maybe = maybe;

const either = (lfn, rfn, ctors) => (value) => ctors[0].prototype.constructor === value.constructor ? lfn(value) : (ctors[1].prototype.constructor === value.constructor ? rfn(value) : null);
exports.either = either;

console.log("maybe 1", maybe("", (x) => x + 1)(null) || "<null>");
console.log("maybe 2", maybe("", (x) => x + 1)("a"));
console.log("either 1", either((l) => l, (r) => r + 1, [String, Number])("a"));
console.log("either 2", either((l) => l, (r) => r + 1, [String, Number])(1));
console.log("either 2", either((l) => l, (r) => r + 1, [String, Number])({}));
