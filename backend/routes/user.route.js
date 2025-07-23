import express from "express";
import checkAuth from "../middleware/auth.middleware.js";
import { getAdmin, getCurrentUser } from "../controller/user.controller.js";
import adminAuth from "../middleware/adminAuth.middleware.js";

const userRoutes = express.Router()

userRoutes.get("/getcurrentuser", checkAuth, getCurrentUser)
userRoutes.get("/getadmin", adminAuth, getAdmin )

export default userRoutes