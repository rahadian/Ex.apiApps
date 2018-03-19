var db = require('../db');
var bodyParser = require('body-parser');

   
	
var Task = {
	getPenalar: function(id,callback){
	sql ="select * from t_kolom where id =?"
	ar = parseInt([id])
		return db.query(sql,ar,callback);

	},
	getPenalarLimit: function(id,limit,callback){
	sql2 ="select * from t_kolom where id = ? LIMIT "+limit
	ar2 = parseInt([id])
		return db.query(sql2,ar2,callback)
	}

};
module.exports=Task;