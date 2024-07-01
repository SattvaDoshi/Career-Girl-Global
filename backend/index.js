import express from 'express'
import { config } from 'dotenv'
import mongoose from 'mongoose';
import { registerUser } from './controllers/userController.js';
import morgan from 'morgan';
import cors from 'cors'

config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors('*'));

const PORT = process.env.PORT || 7000;

app.post('/register',registerUser)

app.listen(PORT, async()=>{
    console.log(`Server is running on port ${PORT}`);
    mongoose.set("strictQuery",true)
    await mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{console.log("Database Connected : ",conn.connection.host);})
    .catch((err)=>{console.log("Database Connection Failed : ",err);})
})