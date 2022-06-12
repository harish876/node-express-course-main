const express=require('express');
const connectDB=require('./db/connect');
const Product=require('./models/product');
const jsonProducts=require('./products.json');

require('dotenv').config();
const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
    } catch (error) {
        console.log(error);
    }
}
start();

