// make simple api

// make first server

const http = require("http");
const port = 3000;

// static data

const userData = [
  {
    name: "yash",
    age: 22,
    number: 7863069413,
    city: "Rajkot",
  },

  {
    name: "Gracy",
    age: 22,
    number: 7863069413,
    city: "Rajkot",
  },

  {
    name: "Yash Kacha",
    age: 22,
    number: 7863069413,
    city: "Rajkot",
  },
];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/json')
  // use stringify use simple data to json data
    res.write(JSON.stringify(userData))
    res.end()

});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



/*
  List of Common HTTP Methods for APIs:

  1. GET
     - Retrieve data from the server
     - Example: GET /users

  2. POST
     - Send data to create a new resource
     - Example: POST /users

  3. PUT
     - Replace an existing resource completely
     - Example: PUT /users/1

  4. PATCH
     - Update part of an existing resource
     - Example: PATCH /users/1

  5. DELETE
     - Remove a resource
     - Example: DELETE /users/1

  6. OPTIONS
     - Check allowed HTTP methods on the server
     - Example: Used in CORS preflight

  7. HEAD
     - Get only the headers of a resource
     - Example: Check if a file exists without downloading it
*/