// const http = require("http");
// const port = 3000;

// // making server

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html" });
//   if (req.url == "/") {
//     res.write(`
//      <form action="/submit" method="POST">
//       <label for="username">Username</label>
//       <input type="text" id="username" name="username" placeholder="Enter username" required>

//       <label for="password">Password</label>
//       <input type="password" id="password" name="password" placeholder="Enter password" required>

//       <button type="submit">Login</button>
//     </form>
//     `);
//     res.end();
//   } else if (req.url == '/submit'){
//     res.write(`
//       <h1>Login Done</h1>
//       `)
//   }

//   // set data which type of
// });

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

const http = require("http");
const fs = require("fs");

const port = 3000;

// making server

const server = http.createServer((req, res) => {
  fs.readFile("./html/form.html", "utf-8", (error, data) => {
    if (error) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.write("Server Issue");
      res.end();
      return;
    }
    res.writeHead(200, { "content-type": "text/html" });
    if (req.url == "/") {
      res.write(data);
      res.end();
    }else if (req.url == '/submit'){
      res.write(`
        <h1> Data Submited </h1>
        `)
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
