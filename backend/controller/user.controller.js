import User from "../model/user.model.js"


export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password")
        if(!user){
            return res.status(404).json({
                message: "user not find"
            });
        }
        console.log(user);
        return res.status(200).json(user)
        
        

    } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: `getCurrentUser  Error: ${error}` });
    }
}

export const getAdmin = async (req, res) => {
    try {
        const adminEmail = req.adminEmail
        if(!adminEmail){
            return res.status(404).json({
              message: "admin not find",
            });
        }
        return res.status(200).json({
            email: adminEmail,
            role: "admin"
        });
    } catch (error) {
        return res
          .status(500)
          .json({ message: `getAdmin  Error: ${error}` });
    }
}