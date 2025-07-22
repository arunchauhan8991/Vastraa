import jwt from "jsonwebtoken"


const checkAuth = async (req, res, next) => {
    try {
        const {token} = req.cookies
        if(!token){
            return res
            .status(400)
            .json({
                message: "User dont have a token"
            })
        }
        const verifyJWT = jwt.verify(token, process.env.JWT_SECRET);
        if(!verifyJWT){
            return res
            .status(400)
            .json({
              message: "User dont have a valid token",
            });
        }
        req.userId  = verifyJWT.userId

        next()

    } catch (error) {
        console.log("checkAuth middleware Error ");
        return res
          .status(500)
          .json({ message: `checkAuth middleware: ${error}` });
    }
}
export default checkAuth