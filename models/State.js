var db = require('../db');
var bodyParser = require('body-parser');

	
var Task = {
	getState: function(callback){
	sql ="select * from t_provinces"
		return db.query(sql,callback);
	},
	getStateId: function(id,callback){
	sql2 ="select * from t_provinces"+
	 " where id=?"
	ar2 = [id]
		return db.query(sql2,parseInt([ar2]),callback)
	}

};
module.exports=Task;