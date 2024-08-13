import express from 'express'
import { config } from 'dotenv'
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import { registerUser } from './controllers/userController.js';
import { deleteBlog, getallBlogs, postBlog } from './controllers/blogController.js';
import { login, logout, register} from './controllers/adminController.js'

config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors('*'));

const PORT = process.env.PORT || 7000;
app.listen(PORT, async()=>{
    console.log(`Server is running on port ${PORT}`);
    mongoose.set("strictQuery",true)
    await mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{console.log("Database Connected : ",conn.connection.host);})
    .catch((err)=>{console.log("Database Connection Failed : ",err);})
})

app.get('/testing',(req,res)=>{
    res.json({
        message:"Hello World"
    })
})

app.post('/register',registerUser)

app.post('/blog',postBlog)
app.get('/blog',getallBlogs)
app.delete('/delete/:id',deleteBlog)

app.post('/signup',register)
app.post('/login',login)
app.post('/logout',logout)
