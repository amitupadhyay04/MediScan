import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <Header />

      <div className="container" style={{ marginTop: '110px' }}>
        <div className="row">
          <div className="col-8">
            <h1 style={{ marginLeft: '30px', fontSize: '50px' }}>
              Translate your handwritten <br /> text into a readable format, <br /> with Scan Plus+
            </h1>
            <p style={{ color: 'rgb(95, 95, 95)', marginLeft: '30px', fontSize: '20px', marginTop: '10px' }}>
              Create and save your prescription from any device, anywhere.
            </p>
            <Link to="/scan">
              <button className="btn lightpurple alignscan">Scan</button>
            </Link>
            <p style={{ marginLeft: '30px', fontSize: '15px', marginTop: '-15px' }}>
              Don't have an account? <Link to="/signup">Sign up for free</Link>
            </p>
          </div>
          <div className="col-4">
            <img src="/static/home6.png" width="1890" height="855" style={{ marginLeft: '-600px', marginTop: '30px', zIndex: '999999' }} alt="home" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
