const express = require("express");

const routes = express.Router();
//  /admin/add-product - for get request
const productcontroller=require('../controllers/product')

routes.get('/add-product',productcontroller.getAddProduct)
    //  /admin/add-product - for post request
    routes.post('/add-product',productcontroller.postAddProduct)
module.exports=routes;