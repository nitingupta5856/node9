const path =require('path');
const rootdir = require('../Util/path');
 exports.getAddProduct=(req,res,next)=>{
 
    res.sendFile(path.join(rootdir,'views','add-product.html'))
   
    
    }
    exports.postAddProduct=(req,res,next)=>{
        console.log(req.body);
        
        res.redirect('/shop')
       
        }

        exports.getshop=(req,res,next)=>{
    
            res.sendFile(path.join(rootdir,'views','shop.html'))
           
            }