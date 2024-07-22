import adminSchema from "../models/adminModel.js";
import bcrypt from 'bcrypt';
import AppError from "../utils/errorUtils.js";

const cookieOptions = {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    secure: true, 
    sameSite: 'none'
}


const register = async (req, res, next) => {
    try {
        const {  email, password } = req.body;

        if (!email || !password) {
            return next(new AppError("All fields are required", 400));
        }

        const userExist = await adminSchema.findOne({ email });
        if (userExist) {
            return next(new AppError("Email already exists, please login", 400));
        }

        const user = await adminSchema.create({
            email,
            password
        });

        if (!user) {
            return next(new AppError("User registration failed, please try again", 400));
        }

        await user.save();

        user.password = undefined;

        const token = await user.generateJWTToken();

        res.cookie("token", token, cookieOptions);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (e) {
        return next(new AppError(e.message, 500));
    }
};



const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new AppError('All fields are required', 400))
        }

        const user = await adminSchema.findOne({ email }).select('+password');

        if (!user || !(bcrypt.compareSync(password, user.password))) {
            return next(new AppError('Email or Password does not match', 400))
        }

        const token = await user.generateJWTToken();

        user.password = undefined;

        res.cookie('token', token, cookieOptions)

        res.status(200).json({
            success: true,
            message: 'User loggedin successfully',
            user,
            token
        })
    } catch (e) {
        return next(new AppError(e.message, 500))
    }
}


const logout = async (req, res, next) => {
        try {
          res.clearCookie('token', {
            secure: true,
            httpOnly: true
          });
      
          res.status(200).json({
            success: true,
            message: 'User logged out successfully'
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: 'Error while logging out'
          });
        }
}





export {
    register,
    login,
    logout,
}