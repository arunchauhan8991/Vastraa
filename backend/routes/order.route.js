import express from "express"
import checkAuth from "../middleware/auth.middleware.js"
import { allOrders, placeOrder, placeOrderRazorpay, updateStatus, userOrders, verifyRazorpay } from "../controller/order.controller.js"
import adminAuth from "../middleware/adminAuth.middleware.js"

const orderRoutes = express.Router()

//for user
orderRoutes.post("/placeorder", checkAuth, placeOrder)
orderRoutes.post("/razorpay", checkAuth, placeOrderRazorpay)

orderRoutes.post("/userorder", checkAuth, userOrders)
orderRoutes.post("/verifyrazorpay", checkAuth, verifyRazorpay)

// for admin
orderRoutes.post("/list",adminAuth, allOrders)
orderRoutes.post("/status",adminAuth, updateStatus)


export default orderRoutes