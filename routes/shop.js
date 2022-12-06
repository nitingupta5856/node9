const express =require("express");
const routes =express.Router();
const shopcontroller=require('../controllers/product')

routes.get('/',shopcontroller.getshop)
module.exports=routes;