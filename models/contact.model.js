import mongoose from 'mongoose';

const contactModel=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "you must provide the name  "]
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

export default contactModel