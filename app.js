import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import ErrorMiddleware from "./middleware/error.js";

//routes


const app = express();

//config
dotenv.config({ path: "./config/config.env" });

//CORS
app.use(cors({origin:"*"}));


app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));



// Custom Error Middleware
app.use(ErrorMiddleware);

export default app;