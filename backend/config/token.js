import jwt from "jsonwebtoken"

export const genToken = async (userId) => {
    try {
        const token = jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: "7d" })
        return token
    } catch (error) {
        console.log("Error while generating token");       
    }
}

export const genTokenAdmin = async (email) => {
  try {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log("Error while generating token");
  }
};