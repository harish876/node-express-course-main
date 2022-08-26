const express=require("express");
const CustomAPIError=require("../errors/custom-error")
const jwt=require("jsonwebtoken")

const login=async(req,res)=>{
    
    try {
        const {username,password}=req.body;
        if(!username || !password)
        {
            throw new CustomAPIError('Please provide username and password',400);
        }
        const id=new Date().getDate();
        const token=jwt.sign({id,username},process.env.JWT_SECRET);
        res.json({msg:"User created successfully",token});
    } catch (error) {
        console.log(error);
    }
}
const dashboard=async(req,res)=>{
    try {
        const authHeader=req.headers.authorization;
        if(!authHeader || !authHeader.startsWith('Bearer '))
        {  
            throw new CustomAPIError('No Token provided',401);
        }
        const token=authHeader.split(' ')[1];
        try {

            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            //console.log(decoded);
            const randomNumber=Math.floor(Math.random()*100);
            res.json({msg:`Hello, ${decoded.username}`,secret:`Your authorised data is as follows: ${randomNumber}`});
            
        } catch (error) {

            throw new CustomAPIError('Invalid Credentials',201);
        }


    } catch (error) {
        console.log(error);
    }
}

module.exports={
    login,
    dashboard
}