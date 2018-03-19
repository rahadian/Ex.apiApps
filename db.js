var mysql = require('mysql'),
    connection = mysql.createPool({
        host:'localhost',
        user:'root',
        password:'toor',
        database:'igogreen'
    });
    module.exports=connection;
