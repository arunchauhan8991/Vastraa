import express from "express"
import checkAuth from "../middleware/auth.middleware.js"
import { placeOrder, userOrders } from "../controller/order.controller.js"

const orderRoutes = express.Router()


orderRoutes.post("/placeorder", checkAuth, placeOrder)
orderRoutes.post("/userorder", checkAuth, userOrders)


export default orderRoutes