// DB Connection
const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'toor',
  database: process.env.DB_NAME || 'farinez',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;