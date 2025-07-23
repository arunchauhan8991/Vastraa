import express from "express"
import { adminLogin, googleLogin, login, logout, registration } from "../controller/auth.controller.js"

const authRoutes = express.Router()

authRoutes.post("/registration", registration)
authRoutes.post("/login", login)
authRoutes.get("/logout", logout)
authRoutes.post("/googlelogin", googleLogin)
authRoutes.post("/adminlogin", adminLogin)

export default authRoutes