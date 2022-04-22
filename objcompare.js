console.group("obj compare");

const a = {};
const b = a;
console.log(a === b); //true
const c = {};
const d = {};
conslole.log(c === d); //false

console.groupEnd();
