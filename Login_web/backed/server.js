const express  = require('express')
const cors = require ('cors')
require('./DB/connect')
const port = 3000

const app = express()

// make middle ware

app.use(cors())
app.use(express.json());

// test routh

app.get("/" , (req , res)=>{
  res.send("Server is start")
})

app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})