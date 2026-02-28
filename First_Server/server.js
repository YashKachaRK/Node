// req , res use http module
const http = require("http");

// req browser mathi avase

// core packeg is http

// server one
http
  .createServer((req, res) => {
    // req  clint --> server ne aoe
    // res server --> clint ne data ape
    res.setHeader('Content-Type','text/html')
    res.write('<h1>This is yash kachaaa </h1>');
    res.end();

    
  })
  .listen(3000);
