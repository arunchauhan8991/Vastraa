import "dotenv/config";
import express from "express";
import connectDb from "./config/db.js";

const port = process.env.PORT || 6000;

const app = express();



app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
  connectDb()
});
