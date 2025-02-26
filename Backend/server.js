import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const corsOptions = {
    origin: ["https://ecommerce-website-azure-ten.vercel.app", "http://localhost:5173"],
    credentials: true // Allow cookies to be sent with requests
};

const Port = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions)); // Use corsOptions here
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", userRoutes);

connectDB();
app.listen(Port, () => console.log(`Server running on port ${Port}`));
