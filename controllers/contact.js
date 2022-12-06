const path =require('path');
const rootdir = require('../Util/path')
 
 exports.getContact=(req,res,next)=>{
  
    res.sendFile(path.join(rootdir,'views','contact.html'))
   
    }

    exports.postContact=(req,res,next)=>{
        console.log(req.body);
        
        res.redirect('/success')
       
        }