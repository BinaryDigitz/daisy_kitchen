import mongoose from "mongoose";
import { JWT_SECRET } from "../config/env.js ";
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required: true,
        minLength:5,
        maxLength:50,

    },
    email:{
        type:String,
        required: true,
        unique: true,
        minLength:5,
        maxLenght:50,
    },
    phone:{
        type:String,
        required: true,
        unique: true,
        minLength:9,
        maxLenght:12
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        maxLenght:250
    },
    photo:{
        type:String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s' 
    },
    
}, {timestamps: true} 
);
userSchema.methods.generateToken = function(){
    return jwt.sign({id: this._id}, JWT_SECRET, { expiresIn: '3d'})
}
const User = mongoose.model('User', userSchema)

export default User