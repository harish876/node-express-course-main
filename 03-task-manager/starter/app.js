const express=require("express");
const app=express();
const port=3000;
const tasks=require("./routes/tasks");
const connectDB=require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use("/api/v1/tasks",tasks);

app.get('/hello',(req,res)=>{
    res.send("Hello World");
})
const start=async()=>{
    
    try {
        await connectDB(process.env.CONNECTION_URI);
        app.listen(port,()=>{console.log(`Example app listening on port ${port}...`);})
    } catch (error) {
        
        console.log(error);
    }
}
start();