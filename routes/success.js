const express =require("express");
const routes =express.Router();
const successController=require('../controllers/success')
routes.get('/success',successController.getSuccess)
   
module.exports=routes;