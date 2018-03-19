var db = require('../db');
var bodyParser = require('body-parser');

   
	
var Task = {
	getPenalar: function(callback){
	sql ="select * from t_kolom"
		return db.query(sql,callback);
	},
	getPenalarLimit: function(limit,callback){
	sql2 ="select * from t_kolom LIMIT ?"
	ar2 = [limit]
		return db.query(sql2,parseInt([limit]),callback)
	}

};
module.exports=Task;