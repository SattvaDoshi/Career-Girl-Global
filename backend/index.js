import express from 'express'
import { config } from 'dotenv'
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import { allUsers, contact, contactUs, deleteForm, registerUser, sendMailer } from './controllers/basicController.js';
import { deleteBlog, getallBlogs, postBlog } from './controllers/blogController.js';
import { login, logout, register} from './controllers/adminController.js'
import { DeleteIntenship, EditIntenship, getAllIntenship, postIntenship } from './controllers/internshipController.js';

config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const corsOptions = {
    origin: ['http://localhost:5173', 'https://career-girl-global.vercel.app'], 
    credentials: true,
  };
  
  app.use(cors(corsOptions));

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

app.post('/send-mail',sendMailer)


app.post('/contact-us',contactUs)
app.delete('/delete-form/:id',deleteForm)
app.get('/contact',contact)

app.post('/blog',postBlog)
app.get('/blog',getallBlogs)
app.delete('/delete/:id',deleteBlog)

app.post('/register',registerUser)
app.get('/all-users',allUsers)
app.post('/signup',register)
app.post('/login',login)
app.post('/logout',logout)

app.post('/post-internship',postIntenship)
app.get('/all-internships',getAllIntenship)
app.put('/edit-internship/:id',EditIntenship)
app.delete('/delete-internship/:id',DeleteIntenship)
