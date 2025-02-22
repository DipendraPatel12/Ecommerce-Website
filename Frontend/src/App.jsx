import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx"; // Import Home component
import { Route, Routes } from "react-router-dom";
import Collection from "./pages/Collection.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/:categoryId?" element={<Collection />} />
      </Routes>
    </>
  );
}

export default App;
