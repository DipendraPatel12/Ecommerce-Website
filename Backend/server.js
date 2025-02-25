import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";


dotenv.config();
const Port = process.env.PORT || 4000;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", userRoutes);

connectDB();
app.listen(Port, () => console.log(`Server running on port ${Port}`));
