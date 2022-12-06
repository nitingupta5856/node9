const express =require("express");
const routes =express.Router();
const contactController=require('../controllers/contact')

routes.get('/contact',contactController.getContact)
    routes.post('/contact',contactController.postContact)
module.exports=routes;