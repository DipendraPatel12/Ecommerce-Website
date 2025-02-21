import imp from "../assets/imp.webp";
import imp2 from "../assets/imp2.jpg";

const Importance = () => {
  return (
    <div className="container mx-auto px-6 py-12 ">
      {/* First Section: Image Left - Text Right */}
      <div className="flex flex-col md:flex-row items-center gap-24">
        <img
          src={imp}
          alt="Importance"
          className="w-full sm:w-1/4 md:w-1/3 lg:w-1/3 rounded-lg shadow-lg"
        />
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Why is this Important?</h2>
          <p className="text-gray-600">
            Understanding the importance of artwork helps us appreciate
            creativity, culture, and history. Each piece tells a unique story,
            enriching our lives with beauty and meaning.
          </p>
          <p className="text-gray-600 hidden md:block sm:block">
            Posters are more than just decorations—they tell stories, spark
            emotions, and transform spaces. Whether it's an inspiring quote, a
            breathtaking landscape, or a nostalgic movie poster, every piece
            adds personality and meaning to your surroundings.
          </p>
        </div>
      </div>

      {/* Second Section: Text Left - Image Right */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-24 mt-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Enhance Your Space</h2>
          <p className="text-gray-600">
            Art transforms spaces, adding character and depth. Choosing the
            right piece can elevate the ambiance of any environment, making it
            more inviting and personal.
          </p>
          <p className="text-gray-600 hidden md:block sm:block">
            A well-placed poster can inspire creativity in a workspace, bring
            warmth to a living room, or set the perfect mood in a bedroom.
            Whether you prefer minimalist elegance, vibrant energy, or nostalgic
            charm, every poster tells a story. Let your walls reflect your
            passions, dreams, and personality—because your space should feel
            like home, and every detail matters.
          </p>
        </div>
        <img
          src={imp2}
          alt="Enhance Space"
          className="w-full sm:w-1/4 md:w-1/3 lg:w-1/3 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Importance;
