import mongoose, { Schema } from 'mongoose'

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true,'Title is required']
    },
    imgURL :{
        type: String,
        required: [true,'Image URL is required']
    },
    description :{
        type: String,
        required: [true,'Description is required']
    }
    }, 
    {timestamps: true}
)

export const Blog = mongoose.model('Blog',blogSchema)

