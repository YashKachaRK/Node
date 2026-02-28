

const http = require("http");
const arg = process.argv
const port = arg[2];

// making server

const server = http.createServer((req, res) => {
  res.write("Yash")
  res.end()

});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
