const mongoose=require("mongoose");
const connectDB=(connection_URI)=>{
    
    return mongoose.connect(connection_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true});
}
module.exports=connectDB;