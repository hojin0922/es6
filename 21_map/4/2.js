
debugger;

const obj = new Map([
  ["one", 100],
  ["two", 200]
]);
const iter = obj.keys();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
