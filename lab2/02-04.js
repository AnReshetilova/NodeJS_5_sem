var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url == "/api/name") {
      fs.readFile("./name.txt", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      response.end(data);
    })
  }

    if (request.url == "/xmlhttprequest") {
      response.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("./xmlhttprequest.html", (err, data) => {
        if (err) {
          console.error(err);
        }
        response.end(data);
      });
    }
  })
  .listen(5000);

console.log("Server running at http://localhost:5000/");
