import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the main CSS file for shared styles

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top flex-md-nowrap p-0 shadows white2 custom-navbar" style={{ margin: '20px', marginLeft: '70px' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/static/logo.png" alt="Bootstrap" width="100" height="150" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
