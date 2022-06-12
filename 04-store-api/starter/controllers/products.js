const Product=require('../models/product');
const getAllProductsStatic=async(req,res)=>{
    try {
        res.status(200).json({msg:"Get All Static products"});
    } catch (error) {
        
    }
}
const getAllProducts=async(req,res)=>{
    try {
        res.status(200).json({msg:"Get All products"});
    } catch (error) {
        
    }
    
}
module.exports={
    getAllProductsStatic,
    getAllProducts
}