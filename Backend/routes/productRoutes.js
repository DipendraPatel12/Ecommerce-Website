import express from "express";
import {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";
import authenticateToken, { adminOnly } from "../middleware/authMiddleware.js"; // ✅ Fix import
import upload from "../middleware/multerMiddleware.js"; // Multer middleware

const router = express.Router();

// ✅ Restrict creation, update, and deletion to admins only
router.post("/", authenticateToken, adminOnly, upload.single("image"), addProduct); // Create product
router.get("/", getProducts); // Get all products
router.get("/:id", getProductById); // Get single product
router.put("/:id", authenticateToken, adminOnly, upload.single("image"), updateProduct); // Update product
router.delete("/:id", authenticateToken, adminOnly, deleteProduct); // Delete product

export default router;
