import {User} from "../models/userModel.js"

const registerUser = async(req,res)=>{
    const {name,email,country} = req.body;

    if(!name || !email || !country){
        res.status(500).json({
            success:false,
            message:"Please fill all the fields"
        })
    }

    const exitsUser =await User.findOne({email})
    if(exitsUser){
       return res.status(500).json({
            success:false,
            message:"User already exits"
        })
    }

    try{
        const user = await User.create({
            name,
            email,
            country
        })
    
        res.status(200).json({
            success:true,
            message:"User created successfully",
            user
        })
    }
    catch(e){
        res.status(500).json({
            success:false,
            message:e.message
        })
    }

}

export {
    registerUser
}