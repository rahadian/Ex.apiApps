var db = require('../db');
var bodyParser = require('body-parser');

	
var Task = {
	getOpinipop: function(callback){
	sql ="select x.*,y.thumbnail from t_artikel x"+
     " join t_artikel y on x.parent_id = y.id_artikel"+
     " where x.id_section=99 and x.publish='Y'"+
     " order by x.dibaca DESC"
		return db.query(sql,callback);
	},
	getOpinipopLimit: function(limit,callback){
	sql2 ="select x.*,y.thumbnail from t_artikel x"+
     " join t_artikel y on x.parent_id = y.id_artikel"+
     " where x.id_section=99 and x.publish='Y'"+
     " order by x.dibaca DESC LIMIT ? "
	ar2 = [limit]
		return db.query(sql2,parseInt([limit]),callback)
	}

};
module.exports=Task;