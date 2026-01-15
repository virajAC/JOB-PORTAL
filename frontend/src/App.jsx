import Navbar from "./components/common/Navbar.jsx";
import Hero from "./components/sections/hero.jsx";
import HowItWorks from "./components/sections/HowItWork.jsx";
import Footer from "./components/common/Footer.jsx";

import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Loginpage from "./components/pages/Loginpage.jsx";
import Signuppage from "./components/pages/Signuppage.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes> 

        < Route path="/" element={<Home/>} />
        < Route path="/signup" element={<Signuppage/>} />
        < Route path="/login" element={<Loginpage/>} />

      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
