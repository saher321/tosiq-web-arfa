import express from 'express'
import { login, register, sendOTP, verifyOTP, resetPassword } from '../controllers/userController.js';
import User from '../models/userModel.js';

const userRoute = express.Router();

// users
userRoute.get("/users", async (req, res) => {
    const users = await User.find({});
    return res.send({status: true, users})
})
// ---------
userRoute.post('/user/register', register)
userRoute.post('/user/login', login)
userRoute.post('/user/send-otp', sendOTP) // forgot password : screen
userRoute.post('/user/verify-otp', verifyOTP) // verify otp
userRoute.post('/user/reset-password', resetPassword) // adding new password

export default userRoute;