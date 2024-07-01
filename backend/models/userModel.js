import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:[true,'Email already Exits']
    },
    country:{
        type:String,
        required:[true,'Country is required']
    }
})

export const User = mongoose.model('User',userSchema)
