import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from "../models/userModel.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({email})
        if (user) {
            return res.send({statusCode: 100, status: false, message: "User email already exist, try new one"})
        }

        // hash password
        const randomStr = await bcrypt.genSalt(10);
        const myHashPassword = await bcrypt.hash(password, randomStr)
        user = new User({
            name,
            email,
            password: myHashPassword
        });

        user = await User.create(user)
        if (user) {
            return res.send({status: true, message: "User Registered successfully", user})
        } else {
            return res.send({status: false, message: "Registration failed"})
        }
    } catch (error) {
        console.log(`Error: ${error}`)
        
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({email})
        if (!user) {
            return res.send({status: false, statusCode: 404, message: "User not found with this email"})
        }

        // match password
        const isMatched = await bcrypt.compare(password, user.password);
        // const isMatched = password == user.password;

        if (!isMatched) {
            return res.send({status: false, message: "Password didn't matched"})
        }
        
        var userToken = jwt.sign({
            userID: user?._id, 
            userEmail: user?.email
        }, process.env.JWT_SECRET, { expiresIn: "1h"});

        if (userToken) {
            return res.send({status: true, message: "User Loggedin successfully", userToken})
        } else {
            return res.send({status: true, message: "Failed to create session"})
        }
    } catch (error) {
        console.log(`Error: ${error}`)
        
    }
}