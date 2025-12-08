import express from 'express'
const verifyUserRequest = express.Router();

verifyUserRequest.get('/user/verify', async (req, res, next) => {
    await authMiddleware(req, res, next)
})

export default verifyUserRequest;