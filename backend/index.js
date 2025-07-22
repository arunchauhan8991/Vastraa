import "dotenv/config";
import cors from "cors"
import express from "express";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";

const port = process.env.PORT || 6000;

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
  connectDb()
});
