import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', marginTop: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <p>All Rights Reserved, Copyright © 2023</p>
        <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex' }}>
          <li style={{ margin: '0 10px' }}><Link to="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="#" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Use</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
