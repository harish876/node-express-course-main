const express=require('express');
const productsRouter=require('./routes/products');
var app=express();
require('dotenv').config();
//async errors
require('express-async-errors');

const errorHandlerMiddleware=require('./middleware/error-handler');
const notFound=require('./middleware/not-found');
const connectDB = require('./db/connect');

//middleware
app.use(express.json());
const port=3000;

//routes -> these go into my products.js file anyways
app.use('/api/v1/products',productsRouter);
app.use(errorHandlerMiddleware);
app.use(notFound);
app.get('/hello',function(req,res){

    res.send("Server is Up and Running");
});

const start=async()=>{
    try {
        //connect it to your DB
        await connectDB(process.env.MONGO_URI);
        app.listen(port,function(){
            console.log(`Server is running on ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();

