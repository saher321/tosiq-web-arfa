import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({email})
        if (user) {
            return res.send({status: false, message: "User email already exist, try new one"})
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
            return res.send({status: true, message: "Registration failed"})
        }
    } catch (error) {
        console.log(`Error: ${error}`)
        
    }
}