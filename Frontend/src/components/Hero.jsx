import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center text-white">
      {/* Background Image with Fade-in Animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dwen6kq4r/image/upload/v1740594914/Bg_ffhuo9.jpg)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content with Animation */}
      <motion.div
        className="relative text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h2
          className="text-4xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Exclusive Print and Artwork
        </motion.h2>

        <motion.p
          className="text-lg mt-2 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Exclusive Art Pieces, for the Exclusive You.
        </motion.p>

        <motion.button
          onClick={() => navigate("/category")}
          className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore more
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
