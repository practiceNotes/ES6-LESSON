// Symbol 生存的两个方法
let name = Symbol.for("name");
let name2 = Symbol.for("name");
console.log(name === name2);         // true


console.log(Symbol.keyFor(name));    // name
