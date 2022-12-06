const path =require('path');
const rootdir = require('../Util/path')
 exports.getSuccess=(req,res,next)=>{
   
    res.sendFile(path.join(rootdir,'views','success.html'))
   
   
   
    }