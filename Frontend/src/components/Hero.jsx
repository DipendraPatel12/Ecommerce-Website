import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/Hero.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center px-6">
        <h2 className="text-4xl font-extrabold drop-shadow-lg">Exclusive Print and Artwork</h2>
        <p className="text-lg mt-2 drop-shadow-md">
          Exclusive Art Pieces, for the Exclusive You.
        </p>
        <button
          onClick={() => navigate("/category")}
          className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold shadow-lg"
        >
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Hero;
