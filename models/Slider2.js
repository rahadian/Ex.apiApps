var db = require('../db');
var bodyParser = require('body-parser');

	
var Task = {
	getSlider2: function(callback){
	sql ="select t_artikel.*, t_section.nama_section, t_artikel.judul_artikel, t_artikel.isi_artikel from t_artikel"+
    " join t_section on t_artikel.id_section = t_section.id_section"+ 
    " where t_artikel.headline = 'Y' and t_artikel.publish = 'Y' "+
    " order by t_artikel.tgl_pub DESC"
		return db.query(sql,callback);
	},
	getSlider2Limit: function(limit,callback){
	sql2 ="select t_artikel.*, t_section.nama_section, t_artikel.judul_artikel, t_artikel.isi_artikel from t_artikel"+
	 " join t_section on t_artikel.id_section = t_section.id_section"+ 
	 " where t_artikel.headline = 'Y' and t_artikel.publish = 'Y'"+
	 " order by t_artikel.tgl_pub DESC LIMIT ? "
	ar2 = [limit]
		return db.query(sql2,parseInt([limit]),callback)
	}

};
module.exports=Task;