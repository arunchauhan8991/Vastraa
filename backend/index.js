import "dotenv/config";
import express from "express";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";

const port = process.env.PORT || 6000;

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
  connectDb()
});
