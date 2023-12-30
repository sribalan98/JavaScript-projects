const port = 3000;
const hostName = "127.0.0.1";
const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("Hello World\nGET\nHOME PAGE");
    res.end(
      JSON.stringify({
        pageName: `Home`,
        statusCode: 200,
        url: `${hostName}${port}${req.url}`,
      })
    );
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      JSON.stringify({
        pageName: `About`,
        statusCode: 200,
        url: `${hostName}${port}${req.url}`,
      })
    );
  } else if (req.method === "GET" && req.url === "/main") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      JSON.stringify({
        pageName: `Main`,
        statusCode: 200,
        url: `${hostName}${port}${req.url}`,
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end(
      JSON.stringify({
        pageName: `Not Found`,
        statusCode: 404,
        url: `${hostName}${port}${req.url} at ${this.statusCode}`,
      })
    );
  }
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});
