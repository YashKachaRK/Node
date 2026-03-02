const http = require("http");
const fs = require("fs");

const port = 3000;

// making server

const server = http.createServer((req, res) => {
  // enter here file name 
  
  fs.readFile("web.html", "utf-8", (error, data) => {
    if (error) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.write("Server error");
      res.end();
      return;
    }
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    res.end;
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
