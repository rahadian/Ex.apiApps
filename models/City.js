var db = require('../db');
var bodyParser = require('body-parser');

	
var Task = {
	postCity: function(callback){
	sql ="select * from t_regencies"
		return db.query(sql,callback);
	},
	postCityP_id: function(province_id,callback){
	sql2 ="select * from t_regencies"+
	 " where province_id=?"
	ar2 = [province_id]
		return db.query(sql2,parseInt([ar2]),callback)
	}

};
module.exports=Task;