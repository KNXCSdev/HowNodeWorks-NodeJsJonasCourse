//module.exports
const Calculator = require("test-module-1");
const calc1 = new Calculator();
console.log(calc1.add(2, 5));

//exports
const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(2, 5));
