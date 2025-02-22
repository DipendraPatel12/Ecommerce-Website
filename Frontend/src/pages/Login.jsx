import { Link } from "react-router-dom";
import loginHero from "../assets/loginHero.jpg";

const Login = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen lg:h-[400px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${loginHero})`,
          filter: "brightness(80%) blur(2px)", // Darkens & slightly blurs background
        }}
      ></div>

      {/* Login Form */}
      <div className="relative bg-white p-8 rounded-lg shadow-xl w-96 bg-opacity-95 z-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <input
          type="text"
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-black text-white p-3 rounded hover:bg-gray-900 transition">
          Login
        </button>
        <p className="mt-4 text-center text-gray-700">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
