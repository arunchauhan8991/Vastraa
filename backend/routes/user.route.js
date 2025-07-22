import express from "express";
import checkAuth from "../middleware/auth.middleware.js";
import { getCurrentUser } from "../controller/user.controller.js";

const userRoutes = express.Router()

userRoutes.get("/getcurrentuser", checkAuth, getCurrentUser)

export default userRoutes