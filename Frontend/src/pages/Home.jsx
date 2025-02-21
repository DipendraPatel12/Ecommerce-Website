import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Importance from "../components/Importance";

const Home = () => {
  return (
    <div className="Home">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="container mx-auto my-12 px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Shop By Categories</h2>
          <p className="text-gray-600">
            Shop from the best, our Film and TV Posters Collection.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Dummy category cards */}
          <div className="bg-gray-200 h-48 rounded-lg"></div>
          <div className="bg-gray-200 h-48 rounded-lg"></div>
          <div className="bg-gray-200 h-48 rounded-lg"></div>
          <div className="bg-gray-200 h-48 rounded-lg"></div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="container mx-auto my-12 px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Our Top Picks</h2>
          <p className="text-gray-600">All New Designs, Same Old Details.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Dummy product cards */}
          <div className="bg-gray-300 h-48 rounded-lg"></div>
          <div className="bg-gray-300 h-48 rounded-lg"></div>
          <div className="bg-gray-300 h-48 rounded-lg"></div>
          <div className="bg-gray-300 h-48 rounded-lg"></div>
        </div>
      </section>
      <Importance />
      <Footer />
    </div>
  );
};

export default Home;
