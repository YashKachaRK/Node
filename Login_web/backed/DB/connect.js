const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mern_auth",
  waitForConnections: true,
  connectionLimit: 10,
});

// Test connection properly
db.getConnection((err, connection) => {
  if (err) {
    console.log("❌ Database not connected:", err);
  } else {
    console.log("✅ Database connected successfully");
    connection.release();
  }
});

module.exports = db.promise();