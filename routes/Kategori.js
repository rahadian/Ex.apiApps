var express = require('express');
var cors = require('cors');
var router = express.Router();
var app = express();
var Task = require('../models/Kategori');
app.use(cors({exposedHeaders:['Content-Length','X-Foo','X-Bar'],
}));

router.get('/:id/:limit?',function(req,res,next){ 

    
    if(req.params.id,req.query.limit){
        // var dateFormat = new Date(Date.UTC(req.params.year,req.params.day-1,req.params.month,0,0));
        
        Task.getKategoriSection(req.params.id,req.query.limit,function(err,rows){
                
            if(err)
            {
                res.json(err);
            }
            else{
                
                 res.json(rows);
                //res.end("I have received the limit: " + limit);
            }
        });
     }
    else{
        Task.getKategori(req.params.id,function(err,rows){
            if(err)
            {

                res.json(err);
            }
            else{

                 res.json(rows)


                 
            }
        });
   }
});
module.exports=router;

