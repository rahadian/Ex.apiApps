var db = require('../db');
var bodyParser = require('body-parser');

	
var Task = {
	getRedaksi: function(callback){
	sql ="select t_artikel.*, t_artikel.judul_artikel from t_artikel"+
     " join t_section on t_section.id_section = t_artikel.id_section"+    
     " where t_artikel.hot='Y' and t_artikel.publish='Y' and t_artikel.parent_id=0 "+
     " order by t_artikel.tgl_pub DESC"
		return db.query(sql,callback);
	},
	getRedaksiLimit: function(limit,callback){
	sql2 ="select t_artikel.*, t_artikel.judul_artikel from t_artikel"+
     " join t_section on t_section.id_section = t_artikel.id_section"+    
     " where t_artikel.hot='Y' and t_artikel.publish='Y' and t_artikel.parent_id=0 "+
     " order by t_artikel.tgl_pub DESC LIMIT ?"
	ar2 = [limit]
		return db.query(sql2,parseInt([ar2]),callback)
	}

};
module.exports=Task;