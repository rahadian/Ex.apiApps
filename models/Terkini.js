var db = require('../db');
var bodyParser = require('body-parser');

	
var Task = {
	getTerkini: function(callback){
	sql ="select t_artikel.*, t_section.nama_section, t_artikel.judul_artikel, t_artikel.isi_artikel from t_artikel"+
     " join t_section on t_section.id_section = t_artikel.id_section"+
     " where t_artikel.id_section=34 and t_artikel.publish='Y'"+
     " order by t_artikel.tgl_pub DESC"
		return db.query(sql,callback);
	},
	getTerkiniLimit: function(limit,callback){
	sql2 ="select t_artikel.*, t_section.nama_section, t_artikel.judul_artikel, t_artikel.isi_artikel from t_artikel"+
     " join t_section on t_section.id_section = t_artikel.id_section"+
     " where t_artikel.id_section=34 and t_artikel.publish='Y'"+
     " order by t_artikel.tgl_pub DESC LIMIT ?"
	ar2 = [limit]
		return db.query(sql2,parseInt([limit]),callback)
	}

};
module.exports=Task;