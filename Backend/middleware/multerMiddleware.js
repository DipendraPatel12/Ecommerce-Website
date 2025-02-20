import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage({
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname);
        }
    })
});

export default upload;