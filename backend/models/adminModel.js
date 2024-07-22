import { Schema, model } from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const adminSchema = new Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [4, 'Password must be at least 4 character'],
        select: false
    },
},
    {
        timestamps: true
    });


adminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next();
});

adminSchema.methods = {
    generateJWTToken: function () {
        return jwt.sign(
            { id: this._id, email: this.email},
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRY }
        )
    },

    generatePasswordResetToken: async function () {
        const resetToken = await crypto.randomBytes(20).toString('hex');

        this.forgotPasswordToken = await crypto
            .createHash('sha256')  
            .update(resetToken)
            .digest('hex');

        this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000; // 15 min from now

        return resetToken;
    }

}


export default model("admin", adminSchema);