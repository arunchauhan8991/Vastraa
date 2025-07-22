import User from "../model/user.model.js";
import Validator from "validator";
import bcrypt from "bcryptjs";
import { genToken } from "../config/token.js";

export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({ message: "user already exists" });
    }
    if (!Validator.isEmail(email)) {
      return res.status(400).json({ message: "Enter valid email" });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "Enter strong password" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashPassword });
    let token = await genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log("Registration Error");
    return res.status(500).json({ message: `Registration Error: ${error}` });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "password not matched" });
    }
    let token = await genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log("Login Error ");
    return res.status(500).json({ message: `Login Error: ${error}` });
  }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ message: "logout succesfully" });
    } catch (error) {
        console.log("Logout Error ");
        return res.status(500).json({ message: `Logout Error: ${error}` });
    }
}

export const googleLogin = async (req, res) => {
  try {
    const { name, email } = req.body
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        name,
        email
      })
    }
    
    let token = await genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);
    
  } catch (error) {
    console.log("Google Login Error ");
    return res.status(500).json({ message: `Google Login Error: ${error}` });
  }
}