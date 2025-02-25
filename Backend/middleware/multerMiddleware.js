import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(), // Store in memory as buffer
    limits: { fileSize: 5 * 1024 * 1024 }, // Optional: 5MB file size limit
});

export default upload;
