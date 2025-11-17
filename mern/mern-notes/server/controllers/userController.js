import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { sendEmail } from "../utils/sendEmail.js";
import { generateOTP } from "../utils/generateOTP.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.send({
        statusCode: 100,
        status: false,
        message: "User email already exist, try new one",
      });
    }

    // hash password
    const randomStr = await bcrypt.genSalt(10);
    const myHashPassword = await bcrypt.hash(password, randomStr);
    user = new User({
      name,
      email,
      password: myHashPassword,
    });

    user = await User.create(user);
    if (user) {
      return res.send({
        status: true,
        message: "User Registered successfully",
        user,
      });
    } else {
      return res.send({ status: false, message: "Registration failed" });
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.send({
        status: false,
        statusCode: 404,
        message: "User not found with this email",
      });
    }

    // match password
    const isMatched = await bcrypt.compare(password, user.password);
    // const isMatched = password == user.password;

    if (!isMatched) {
      return res.send({ status: false, message: "Password didn't matched" });
    }

    const content = `
        <h1>Your are loggedin in our system</h1>
        <br />
        <br />
        <small>Regards: Notify</small>
        `;

    var userToken = jwt.sign(
      {
        userID: user?._id,
        userEmail: user?.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    if (userToken) {
      sendEmail(user.email, "Loggin successfully", content);
      return res.send({
        status: true,
        message: "User Loggedin successfully",
        userToken,
      });
    } else {
      return res.send({ status: true, message: "Failed to create session" });
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const sendOTP = async (req, res) => {
  const {email} = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({
        status: false,
        message: "User not found with this email",
      });
    } else {
      const otp = generateOTP(); // will provide 6-digit otp
      const content = `
            Hi ${user.name}, 
             This is your one time password (OTP): 
             <h3>${otp}</h3>
             Don't share otp to anyone.             
            `;

      sendEmail(user.email, "OTP for reset password", content);

      user.otp = otp;
      user.isVerified = false;
      await user.save();

      return res.send({status: true, message: "Otp has been send to your email"})
    }
  } catch (error) {
      console.log("Error: ", error)

  }
};
export const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    try {

        if (!otp) return res.send({status: false, message: "OTP is not provided"})

        const user = await User.findOne({email})
        if (!user) return res.send({status: false, message: "User not found"})
        
        if (otp != user.otp) return res.send({status: false, message: "OTP is not valid"})
        
        user.otp = null;
        user.isVerified = true;
        await user.save();

        return res.send({status: true, message: "Verified successfully"})

    } catch (error) {
        console.log("Error: ", error)
    }
};
export const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.send({
        status: false,
        statusCode: 404,
        message: "User not found with this email",
      });
    }

    // hash newPassword
    const randomStr = await bcrypt.genSalt(10);
    const myHashPassword = await bcrypt.hash(newPassword, randomStr);
    
    user.password = myHashPassword
    await user.save();

    const content = `
    <h1>Your has been reset</h1>
    <br />
    <br />
    <small>Regards: Notify</small>
    `;
    
    sendEmail(email, "Password reset successful", content);
    return res.send({ status: true, message: "Password has been reset" });
  } catch (error) {
    console.log(`Error: ${error}`);
  }

};
