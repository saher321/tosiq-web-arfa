import express from 'express'
import jwt from 'jsonwebtoken'
const verifyUserRequest = express.Router();

verifyUserRequest.get('/user/verify', async (req, res) => {
    const token = req.cookies?.userToken;
    try {
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
        return res.send({status: true, user: verifiedUser})
    } catch (error) {
        console.log("Something went wrong", error)
    }
})

export default verifyUserRequest;