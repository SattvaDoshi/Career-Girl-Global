import sendMail from "../middlewares/sendMail.js";
import { ContactUs } from "../models/contactUsModel.js";
import { User } from "../models/userModel.js"
import AppError from "../utils/errorUtils.js";

const registerUser = async (req, res) => {
    const { name, email, country } = req.body;

    if (!name || !email || !country) {
        res.status(500).json({
            success: false,
            message: "Please fill all the fields"
        })
    }

    const exitsUser = await User.findOne({ email })
    if (exitsUser) {
        return res.status(500).json({
            success: false,
            message: "User already exits"
        })
    }

    try {
        const user = await User.create({
            name,
            email,
            country
        })

        res.status(200).json({
            success: true,
            message: "User created successfully",
            user
        })
    }
    catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

const allUsers = async (req, res, next) => {
    try
    {
        const users = await User.find();

        res.status(200).json({
            success: true,
            message: "All Users",
            users
        })
    }
    catch(e)
    {
        console.log(e);
        return next(new AppError("Something Went wrong", 400));
    }
}

const sendMailer = async (req, res) => {
    const { email } = req.body;
    try {

        await sendMail(
            email,
            "Let's Negotiate",
            "Let's negotiate with each other.."
        );

        res.status(200).json({
            success: true,
            message: "Email sent successfully"
        })
    }
    catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

const contactUs = async (req, res, next) => {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) 
        return next(new AppError("Please fill all the fields", 400));

    try {
        const contactForm = await ContactUs.create({
            firstName,
            lastName,
            email,
            message
        })

        res.status(200).json({
            success: true,
            message: "Contact form submitted successfully",
            contactForm
        })
    } 
    catch (error) {
        console.log(error);
        return next(new AppError("Something Went wrong", 400));
    } 
}

const contact = async (req, res, next) => {
    try
    {
        const contact = await ContactUs.find();
        res.status(200).json({
            success: true,
            message: "All Contacts",
            contact
        })
    }
    catch(error)
    {
        console.log(error);
        return next(new AppError("Something Went wrong", 400));
    }
}

const deleteForm = async (req, res, next) => {
    const { id } = req.params;
    try {
        const contactForm = await ContactUs.findByIdAndDelete(id);

        if (!contactForm) 
            return next(new AppError("Form not found", 404));
        
        res.status(200).json({
            success: true,
            message: "Form deleted successfully",
        })

    } 
    catch (error) {
        console.log(error);
        return next(new AppError("Something Went wrong", 400));
    }
}

export {
    registerUser,
    allUsers,
    sendMailer,
    contact,
    contactUs,
    deleteForm
}