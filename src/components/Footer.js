import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the main CSS file for shared styles

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <p>All Rights Reserved, Copyright © 2023</p>
        <ul className="footer-links">
          <li><Link to="#" className="footer-link">Privacy Policy</Link></li>
          <li><Link to="#" className="footer-link">Terms of Use</Link></li>
          <li><Link to="#" className="footer-link">Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
