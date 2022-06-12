const Task=require('../models/Task');

const getAllTasks= async(req,res)=>{
    try {
        const tasks=await Task.find({});
        res.status(200).json({tasks});
        //res.send("All the items are available");
    } catch (error) {
        res.status(500).json({msg:error});
    }
    
}
const createTask= async(req,res)=>{
    
    try {
        const task=await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {

        res.status(500).json({msg:error})
        console.log(error);
    }
    //successfull POST -> 201
}
const getTask= async(req,res)=>{
    try {
        const taskID=req.params.id;
        const task=await Task.findOne({_id:taskID});
        if(!task)
            return res.status(404).json({msg:`No task with the ID: ${taskID}`});

        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const updateTask=async(req,res)=>{

    try {
        const taskID=req.params.id;
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        });
        if(!task)
            return res.status(404).json({msg:`No task with the ID: ${taskID}`});

        res.status(200).json({task});

    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const deleteTask=async(req,res)=>{
    try {
        const taskID=req.params.id;
        const deletedTask=await Task.findOneAndDelete({_id:taskID});
        if(!deletedTask)
            return res.status(404).json({msg:`Task with id: ${taskID} not found`});

        res.status(200).json({deletedTask});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}