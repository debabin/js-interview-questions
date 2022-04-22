console.group("var");

function test() {
  console.log(a); // undefined

  var a = 2;
  console.log(a); // 2
}

test();

console.groupEnd();
