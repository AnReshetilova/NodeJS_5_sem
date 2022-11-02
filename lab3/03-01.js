const http = require("http");
const ps = require("prompt-sync");
const prompt = ps();
let state = "norm";
let result;

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  })
  .listen(5000);

while (state !== "exit") {
  result = prompt(state + "->");
  switch (result) {
    case "norm":
    case "stop":
    case "idle":
    case "test":
    case "exit": {
      console.log(state + "-->" + result);
      state = result;
      break;
    }
    default: {
      console.log(result);
      break;
    }
  }
}
process.exit(0);
