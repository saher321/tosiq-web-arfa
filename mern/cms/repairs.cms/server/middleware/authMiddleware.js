import jwt from 'jsonwebtoken'

export const authMiddleware = async (req, res, next) => {
    const userToken = req.headers.authorization;
    console.log(userToken)
    if (!userToken) {
        return res.send({status: false, statusCode: 401, message: "Unauthorized!"})
    }
    
    try {
        const token = userToken.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.send({status: false, message: "User token is not valid"})
            }

            req.user = user;
            next();
        })

    } catch (error) {
        return res.send({status: false, message: "Somthing went wrong"})
    }
}