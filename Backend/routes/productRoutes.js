import express from "express";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "../controllers/productController.js";
import authenticateToken from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js"; // Multer middleware

const router = express.Router();

// CRUD Routes
router.post("/", authenticateToken, upload.single("image"), createProduct); // Create product
router.get("/", getProducts); // Get all products
router.get("/:id", getProductById); // Get single product
router.put("/:id", authenticateToken, upload.single("image"), updateProduct); // Update product
router.delete("/:id", authenticateToken, deleteProduct); // Delete product

export default router;
