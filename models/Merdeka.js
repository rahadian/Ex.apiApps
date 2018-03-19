var db = require('../db');
var bodyParser = require('body-parser');

	
var Task = {
	getMerdeka: function(callback){
	sql ="select t_artikel.*, t_kolom.*,t_artikel.urltitle from t_artikel"+
     " join t_section on t_section.id_section = t_artikel.id_section"+
     " join t_kolom on t_kolom.id = t_artikel.penalar"+
     " where t_artikel.id_section=29 and t_artikel.publish='Y' and t_artikel.parent_id=0 "+
     " order by t_artikel.tgl_pub DESC"
		return db.query(sql,callback);
	},
	getMerdekaLimit: function(limit,callback){
	sql2 ="select t_artikel.*, t_kolom.*,t_artikel.urltitle from t_artikel"+
     " join t_section on t_section.id_section = t_artikel.id_section"+
     " join t_kolom on t_kolom.id = t_artikel.penalar"+
     " where t_artikel.id_section=29 and t_artikel.publish='Y' and t_artikel.parent_id=0 "+
     " order by t_artikel.tgl_pub DESC LIMIT ?"
	ar2 = [limit]
		return db.query(sql2,parseInt([limit]),callback)
	}

};
module.exports=Task;