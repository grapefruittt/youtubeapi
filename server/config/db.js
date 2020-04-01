const mysql = require('mysql');

const db = mysql.createPool({
    host: 'database-1.c8l6tz3n57iw.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'hyerin',
    password: '19970614',
    database: 'youtube'
});

module.exports = db;