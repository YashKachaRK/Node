const http = require("http");
const fs = require("fs");
const queryString = require ('querystring')
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
    } else if (req.url == "/submit") {
      res.write(`
        <h1> Data Submited </h1>

        
        `);

        // get data first
        let dataBody = []
        req.on('data',(chunk)=>{
            dataBody.push(chunk)
        })

        req.on('end' ,()=>{
          // data change into string 
          let rowData = Buffer.concat(dataBody).toString();
          let readData = queryString.parse(rowData)
          console.log(readData);
          
          console.log(rowData);
        })
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
