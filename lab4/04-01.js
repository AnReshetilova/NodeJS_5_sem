const http = require("http");
const url = require("url");
const fs = require("fs");
const data = require("./db");

const db = new data.DB();

db.on("GET", (req, res) => {
  console.log("DB.GET");
  res.end(JSON.stringify(db.get()));
});

db.on("POST", (req, res) => {
  console.log("DB.POST");
  req.on("data", (data) => {
    let r = JSON.parse(data);
    db.post(r);
    res.end(JSON.stringify(r));
  });
});

db.on("PUT", (req, res) => {
  console.log("DB.PUT");
  req.on("data", (data) => {
    let r = JSON.parse(data);
    db.update(r);
    res.end(JSON.stringify(r));
  });
});

db.on("DELETE", (req, res) => {
  console.log("DB.DELETE");
  req.on("data", (data) => {
    let r = JSON.parse(data);
    res.end(JSON.stringify(db.delete(r)));
  });
});

http
  .createServer(function (request, response) {
    if (url.parse(request.url).pathname === "/") {
      let html = fs.readFileSync("./04-02.html");
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(html);
    } else if (url.parse(request.url).pathname === "/api/db") {
      db.emit(request.method, request, response);
    }
  })
  .listen(5000);
