import Navbar from "./components/common/Navbar.jsx";
import Hero from "./components/sections/hero.jsx";
import HowItWorks from "./components/sections/HowItWork.jsx";
import Footer from "./components/common/Footer.jsx";
import Signup from "./components/common/Signup.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes> 

        < Route path="/" element={<Home/>} />
        < Route path="/signup" element={<Signup/>} />

      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
