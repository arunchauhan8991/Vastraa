import express from "express"
import checkAuth from "../middleware/auth.middleware.js"
import { addToCart, getUserCart, updateCart } from "../controller/cart.controller.js"

const cartRoutes = express.Router()


cartRoutes.post("/get", checkAuth, getUserCart )
cartRoutes.post("/add", checkAuth, addToCart )
cartRoutes.post("/update", checkAuth, updateCart )



export default cartRoutes