const express=require('express');
const tasks=require('./routes/tasks');
const connectDB=require('./db/connect')
require('dotenv').config();
var app=express();
const port=3000;

//middleware -> to parse the data in json format
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks',tasks);
//app.get('/api/v1/tasks')
//app.post('/api/v1/tasks')
//app.get('/api/v1/tasks/:id') get a single task
//app.patch('/api/v1/tasks/:id') update a single task
//app.delete('/api/v1/tasks/:id') delete a single task

const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,function(){console.log(`Server is listening on ${port}...`);});

    } catch (error) {
        console.log(error);
    }
}
start()