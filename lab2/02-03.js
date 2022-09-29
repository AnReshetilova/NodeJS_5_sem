var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url == "/api/name") {
      let name = fs.readFileSync("./name.txt");
      response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      response.end(name);
    }
  })
  .listen(5000);

console.log("Server running at http://localhost:5000/");
