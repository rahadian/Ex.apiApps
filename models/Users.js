var db = require('../db');
var bodyParser = require('body-parser');

	
var Task = {
	getUsers: function(callback){
	sql ="select * from t_account"
		return db.query(sql,callback);
	},
	getUsersId: function(id,callback){
	sql2 ="select * from t_account"+
	 " where id=?"
	ar2 = [id]
		return db.query(sql2,parseInt([ar2]),callback)
	}

};
module.exports=Task;