import React from 'react';
import './Footer.css'; // Make sure to move the previous CSS here

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-column brand-col">
          <h2 className="logo">Job<span>Portal</span></h2>
          <p className="call-us">Call us</p>
          <a href="tel:987654321" className="phone-number">987654321</a>
          <address className="footer-address">
            Sundarharicha, Bansbari<br />
            Morang<br />
            <a href="mailto:jobportal@gmail.com">jobportal@gmail.com</a>
          </address>
        </div>

        
        <div className="footer-column">
          <h3>For Candidates</h3>
          <ul>
            <li><a href="#find-jobs">Find Jobs</a></li>
            <li><a href="#dashboard">Candidate Dashboard</a></li>
            <li><a href="#favs">Favourite Jobs</a></li>
            <li><a href="#inbox">My Inbox</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>For Employers</h3>
          <ul>
            <li><a href="#candidates">Find Candidates</a></li>
            <li><a href="#company">Company Dashboard</a></li>
            <li><a href="#post">Post a Job</a></li>
            <li><a href="#manage">Manage Jobs</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-container">
          <p>&copy; {currentYear} Joportal. All Right Reserved.</p>
          <div className="social-icons">
            {/* You can replace these with Lucide-react or FontAwesome icons later */}
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#twitter" aria-label="Twitter">t</a>
            <a href="#instagram" aria-label="Instagram">ig</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;