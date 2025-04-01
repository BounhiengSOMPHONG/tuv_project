const mysql2 = require('mysql2/promise');

const host = 'localhost'
const user = 'root'
const password = ''
const database = 'tuv_test'
const conn = mysql2.createPool({
    host,
    user,
    password,
    database
})
module.exports = conn;
