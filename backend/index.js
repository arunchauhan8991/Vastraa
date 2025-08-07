import "dotenv/config";
import cors from "cors"
import express from "express";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import orderRoutes from "./routes/order.route.js";

const port = process.env.PORT || 6000;

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: ["https://vastraa-frontend-tey9.onrender.com", "https://vastraa-admin.onrender.com"],
    credentials: true,
  })
);
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes )
app.use("/api/order", orderRoutes )


app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
  connectDb()
});
