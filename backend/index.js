import express from 'express'
import { config } from 'dotenv'

config();
const app = express();

const PORT = process.env.PORT || 7000;

app.listen(PORT, async()=>{
    console.log(`Server is running on port ${PORT}`);
})