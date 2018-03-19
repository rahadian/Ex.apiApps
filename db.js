var mysql = require('mysql'),
    connection = mysql.createPool({
        host:'localhost',
        user:'youruser',
        password:'yourpw',
        database:'yourdb'
    });
    module.exports=connection;
