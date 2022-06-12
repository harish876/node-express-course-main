const express=require('express');
const {getAllProductsStatic,getAllProducts}=require('../controllers/products');
var router=express.Router();

//routes
router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);

module.exports=router;