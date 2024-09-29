import mongoose, { Schema } from 'mongoose'

const ContactSchema = new Schema({
    firstName:{
        type:String,
        required:[true,'First Name is required']
    },
    lastName:{
        type:String,
        required:[true,'Last name is required'],
    },
    email:{
        type:String,
        required:[true,'Country is required']
    },
    message:{
        type:String,
        required:[true, " Message is required"]
    }
})

export const ContactUs = mongoose.model('ContactUs',ContactSchema)
