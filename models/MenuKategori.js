var db = require('../db');
var bodyParser = require('body-parser');
// penalar = "select * from t_kolom"

    
	
var Task = {
	getKategori: function(callback){
	sql ="select t_section.* from t_section"+
       
     " where id_supsection = 0 and status = 1 and id_section not in (34) "+
     " order by position asc"
		return db.query(sql,callback);
	}
	// getKategoriLimit: function(limit,callback){
	// sql2 ="select count (penalar) as row_penalar,t_kolom.nama,t_kolom.keterangan,t_kolom.image,t_kolom.postdate,t_kolom.id from t_artikel"+
 //     " join t_kolom on t_kolom.id = t_artikel.penalar"+    
 //     " where t_artikel.publish='Y' and t_artikel.parent_id=0 "+
 //     " group by penalar"
 //     " LIMIT ?"
	// ar2 = [limit]
	// 	return db.query(sql2,parseInt([ar2]),callback)
	// }

};
module.exports=Task;