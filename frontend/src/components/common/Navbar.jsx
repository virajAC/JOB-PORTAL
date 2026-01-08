import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
   /* <div className='navbar-top'>*/
    <nav className="navbar">
      <div className="nav-logo">Job Portal</div>

      <div className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="/Signup" className="nav-link">Sign-In</a>
        <a href="#Log-In" className="nav-link">Log-In</a>
      </div>
    </nav>
  );
};

export default Navbar;