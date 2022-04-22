console.group("settimeout");

const array = [1, 2, 3, 4];

//problem
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("🤔 index: " + i); // 4 🤔 index: 4
  }, 3000);
}

//fixed
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("🧐 index: " + i); // 4 🤔 index: 4
  }, 3000);
}

//fixed
for (var i = 0; i < array.length; i++) {
  setTimeout(
    (function (i) {
      return function () {
        console.log("🧐 index: " + i);
      };
    })(i),
    3000
  );
}

console.groupEnd();
