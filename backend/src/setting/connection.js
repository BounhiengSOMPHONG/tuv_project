const mysql2 = require('mysql2/promise');

const host = '100.91.194.104'
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
