const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  //NOTE STREAMS BASICALLY RECEIVE THE DATA NOT AT ONCE BUT bit by bit
  //SOLUTION 2 STREAMS PROBLEMS WITH RESPONSE RECEVING DATA TOO FAST
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode(500);
  //   res.end("File not found");
  // });

  //SOLUTION 3
  //NOTE .pipe() to connect a readable stream to a writable stream.
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server started");
});
