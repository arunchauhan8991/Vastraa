import jwt from "jsonwebtoken"


const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.cookies
        if(!token){
            return res
            .status(400)
            .json({message: "Not Authorised login again !!"})
        }
        const verifyJWT =  jwt.verify(token, process.env.JWT_SECRET)
        if(!verifyJWT){
            return res
              .status(400)
              .json({ message: "Not Authorised login again, invalid token" });
        }

        req.adminEmail = process.env.ADMIN_EMAIL
        next()
    } catch (error) {
        console.log("adminAuth middleware Error ");
        return res
          .status(500)
          .json({ message: `adminAuth middleware: ${error}` });
    }
}

export default adminAuth