const http = require("http");
const url = require("url");
const fs = require("fs");

let fact = (num) => {
  return num < 2 ? 1 : num * fact(num - 1);
};

http
  .createServer(function (request, response) {
    const current_url = url.parse(request.url, true);

    if (current_url.pathname === "/fact") {
      const k = current_url.query.k;

      if (Number.isInteger(+k)) {
        response.writeHead(200, { "Content-Type": "application/json" });
        process.nextTick(() =>
          response.end(JSON.stringify({ k: k, fact: fact(+k) }))
        );
      } else if (k.toString() == "x") {
        let html = fs.readFileSync("./fact.html");
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.end(html);
      }
    }
  })
  .listen(5000);
