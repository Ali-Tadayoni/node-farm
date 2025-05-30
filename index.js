const fs = require("fs");
const http = require("http");
const url = require("url");

// Top level code that only execute once we start the program
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

//  Create the server
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("hello from the overview");
  } else if (pathName === "/products") {
    res.end("hello from the products");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>not found</h1>");
  }
});

//  Listen to the server
server.listen("8000", "127.0.0.1", () => {
  console.log("Listening to the request on port 8000");
});
