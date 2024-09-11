import mongoose from "mongoose";



const schema=new mongoose.Schema({
    title:String,
    description:String,
    status:{
        type:String,
        enum:['toDo' , 'doing' , 'done']

    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    assignTo:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    deadLine:Date,  
},{timestamps:true})

export const taskModel=mongoose.model('task',schema)

