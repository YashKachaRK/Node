const fs = require("fs");

// fs.writeFileSync('./text/hello.txt' , 'This is a fruit')
// // fs.unlinkSync('./text/undefined.txt')

// // read data into file

// const data = fs.readFileSync('./text/hello.txt' ,'utf-8')
// console.log(data)

// //add data

// fs.appendFileSync('./text/hello.txt' , 'Yash Kacha')

const opartion = process.argv[2];

if (opartion == "write") {
  const fileName = process.argv[3];
  const fileContent = process.argv[4];

  fs.writeFileSync(`./text/${fileName}.txt`, `${fileContent}`);
} else if (opartion == "delete") {
  const fileName = process.argv[3];
  fs.unlinkSync(`./text/${fileName}.txt`);
} else if (opartion == "read") {
  const fileName = process.argv[3];
  const data = fs.readFileSync(`./text/${fileName}.txt`, "utf-8");
  console.log(data);
} else if (opartion == "add") {
  const fileName = process.argv[3];
  const fileContent = process.argv[4];

  fs.appendFileSync(`./text/${fileName}.txt`, `${fileContent}`);
}
else{
  console.log("Something went wrong ");
 
  
}