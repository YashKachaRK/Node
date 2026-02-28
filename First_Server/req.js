const http = require("http");
const port = 3000;

// making server

const server = http.createServer((req, res) => {
  // console.log(req.method)

  if ((req.url == "/")) {
    res.write("First Page");
  } else if ((req.url == "/second")) {
    res.write("Second Page");
  }

  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
