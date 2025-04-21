const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished"); //1

  setTimeout(() => console.log("Timer 2 finished"), 0); // 4
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished")); //3 Because its executes after I/O has finished (readFile)

  process.nextTick(() => console.log("Process.nextTick")); // 2 Because it executes before event loop even starts

  crypto.pbkdf2("password", "salt", 1000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted"); // 5 Because of thread Pool
  });
});

console.log("Hello from the top level code");
