var db = require('../db');
var bodyParser = require('body-parser');

   
	
var Task = {
	getOpiniPenalar: function(callback){
	sql ="select * "+
		 " from t_artikel"+
		 " where t_artikel.parent_id =0 and t_artikel.penalar = 24 and t_artikel.id_section not in (34)"+
		 " order by t_artikel.tgl_pub desc "
	// ar = parseInt([id])
		return db.query(sql,callback);

	},
	getOpiniPenalarId: function(id,callback){
	sql2 ="select * "+
		 " from t_artikel"+
		 " where parent_id =0 and penalar = ? and t_artikel.id_section not in (34)"+
		 " order by tgl_pub desc "
	 ar2 = parseInt([id])
		return db.query(sql2,ar2,callback)
	}

};
module.exports=Task;