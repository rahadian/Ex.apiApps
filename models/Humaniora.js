var db = require('../db');
var bodyParser = require('body-parser');

   
	
var Task = {
	getHumaniora: function(callback){
	sql ="select t_artikel.*,t_section.nama_section,t_artikel.judul_artikel,t_artikel.isi_artikel from t_artikel"+
	 " join t_section on t_section.id_section = t_artikel.id_section"+
	 " where t_section.id_section = 31 and t_artikel.id_section = 31 and parent_id = 0"+
	 " order by tgl_pub DESC"
		return db.query(sql,callback);
	},
	getHumanioraLimit: function(limit,callback){
	sql2 ="select t_artikel.*,t_section.nama_section,t_artikel.judul_artikel,t_artikel.isi_artikel from t_artikel"+
	 " join t_section on t_section.id_section = t_artikel.id_section"+
	 " where t_section.id_section = 31 and t_artikel.id_section = 31 and parent_id = 0"+
	 " order by tgl_pub DESC LIMIT ?"
	ar2 = parseInt([limit])
		return db.query(sql2,[ar2],callback)
	}

};
module.exports=Task;