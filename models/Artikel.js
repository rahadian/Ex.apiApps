var db = require('../db');
var bodyParser = require('body-parser');

   
var Task = {
	getArtikel: function(callback){
	sql ="SELECT t_artikel.*, t_section.nama_section, t_artikel.judul_artikel,t_artikel.isi_artikel,t_admin.nama, t_admin.foto_admin FROM t_artikel"+
	 " JOIN t_section ON t_section.id_section = t_artikel.id_section"+
	 " JOIN t_admin ON t_admin.id_adm = t_artikel.id_admin"+
	 " WHERE  t_artikel.publish = 'Y' and t_artikel.parent_id= 0"+
	 " ORDER BY tgl_pub DESC"
		return db.query(sql,callback);
	},
	getArtikelLimit: function(limit,callback){
	sql2 ="SELECT t_artikel.*, t_section.nama_section, t_artikel.judul_artikel,t_artikel.isi_artikel,t_admin.nama, t_admin.foto_admin FROM t_artikel"+
	 " JOIN t_section ON t_section.id_section = t_artikel.id_section"+
	 " JOIN t_admin ON t_admin.id_adm = t_artikel.id_admin"+
	 " WHERE  t_artikel.publish = 'Y' and t_artikel.parent_id= 0"+
	 " ORDER BY tgl_pub DESC LIMIT ?"
	ar2 = [limit]
		return db.query(sql2,parseInt([limit]),callback)
	}

};
module.exports=Task;