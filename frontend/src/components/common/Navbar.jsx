import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
   /* <div className='navbar-top'>*/
    <nav className="navbar">
      <div className="nav-logo">Job Portal</div>

      <div className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="#find-jobs" className="nav-link">Find Jobs</a>
        <a href="#companies" className="nav-link">Companies</a>
        <a href="#candidates" className="nav-link">Candidates</a>
        <a href="#blog" className="nav-link">Blog</a>
        <a href="#contact-us" className="nav-link">Contact Us</a>
        <a href="/Signup" className="nav-link">Sign-In</a>
        <a href="#Log-In" className="nav-link">Log-In</a>
      </div>
    </nav>
  );
};

export default Navbar;