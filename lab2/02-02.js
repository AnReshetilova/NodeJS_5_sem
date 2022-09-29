var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    const fname = "./pic.png";
    let png = null;

    if (request.url == "/png") {
      fs.stat(fname, (err, stat) => {
        if (err) {
          console.log("error:", err);
        } else {
          png = fs.readFileSync(fname);
          response.contentType = 'image/png';
          response.contentLength = stat.size;
          response.end(png, "binary");
        }
      });
    }
  })
  .listen(5000);

console.log("Server running at http://localhost:5000/");
