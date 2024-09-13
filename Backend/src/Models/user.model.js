import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
    },
    subjects:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Subject"
        }
    ],
    password:{
        type:String,
        required:[true, "Password is required"] 
    },
    refreshToken:{
        type:String
    }
    
},{timestamps:true})

export const User=mongoose.model("User",userSchema)