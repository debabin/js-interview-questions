console.group("var");

const a = { x: 1, y: 2 };
const b = a;
b.x = 10;
console.log(a.x); //10

console.groupEnd();
