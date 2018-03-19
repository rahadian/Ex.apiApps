var db = require('../db');
var bodyParser = require('body-parser');

	
var Task = {
	getDetail: function(callback){
	sql ="select t_artikel.*, t_section.*,t_artikel.urltitle from t_artikel"+
     " join t_section on t_section.id_section = t_artikel.id_section"+
     " where t_artikel.publish='Y' and t_artikel.parent_id=0 and t_artikel.urltitle=0"+
     " order by t_artikel.tgl_pub DESC"
		return db.query(sql,callback);
	},
	getDetailId: function(id,callback){
	sql2 ="select t_artikel.*, t_section.*,t_artikel.urltitle from t_artikel"+
     " join t_section on t_section.id_section = t_artikel.id_section"+
     " where t_artikel.publish='Y' and t_artikel.parent_id=0 and t_artikel.urltitle=0 and t_artikel.id_artikel=?"+
     " order by t_artikel.tgl_pub DESC"
	ar2 = [id]
		return db.query(sql2,parseInt([ar2]),callback)
	}

};
module.exports=Task;