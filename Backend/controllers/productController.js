import Product from "../models/Product.js";
import cloudinary from "../config/cloudinary.js";

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;

        // Check if file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: "Image file is required" });
        }

        // Convert buffer to a Cloudinary-uploaded file
        const uploadResult = await cloudinary.uploader.upload_stream({ resource_type: "image" }, async (error, result) => {
            if (error) return res.status(500).json({ message: "Cloudinary upload failed", error });

            const newProduct = new Product({
                name,
                description,
                price,
                category,
                stock,
                image: result.secure_url
            });

            await newProduct.save();
            res.status(201).json({ message: "Product created successfully", product: newProduct });
        });

        uploadResult.end(req.file.buffer); // Send buffer to Cloudinary

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// 🔹 Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// 🔹 Get a single product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// 🔹 Update a product
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        const { name, description, price, category, stock } = req.body;

        // If a new image is uploaded, delete the old one from Cloudinary
        if (req.file) {
            const oldImageUrl = product.image;
            const publicId = oldImageUrl.split("/").pop().split(".")[0]; // Extract public ID from URL
            await cloudinary.uploader.destroy(publicId); // Delete old image from Cloudinary

            // Upload new image from buffer
            const uploadResult = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream({ resource_type: "image" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                uploadStream.end(req.file.buffer); // Send buffer to Cloudinary
            });

            product.image = uploadResult.secure_url; // Update image URL in the database
        }

        // Update other fields
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category;
        product.stock = stock || product.stock;

        await product.save();
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
// 🔹 Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        // Extract Cloudinary public ID
        const publicId = product.image.split("/").pop().split(".")[0];

        // Delete image from Cloudinary
        await cloudinary.uploader.destroy(publicId);

        // Delete product from database
        await product.deleteOne();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
