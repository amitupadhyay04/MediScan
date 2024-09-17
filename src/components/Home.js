import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the main CSS file for shared styles
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component

const Home = () => {
  return (
    <div>
      {/* Include Header */}
      <Header />

      {/* Main Section */}
      <div className="container" style={{ marginTop: '110px' }}>
        <div className="row">
          <div className="col-8">
            <br /><br /><br /><br />
            <h1 className="main-title">
              Translate your handwritten <br />
              text into a readable format, <br />
              with MediScan 
            </h1>
            <p className="subtitle">
              Create and save your prescription from any device, anywhere.
            </p>
            <br />
            <form action="/scan" method="get">
              <button
                type="submit"
                className="btn lightpurple alignscan"
              >
                <h4 style={{ fontSize: '15px', margin: '3.5px', color: '#515b9d' }}>Scan</h4>
              </button>
            </form>
            
            <h4
                style={{
                  fontSize: '15px',
                  marginLeft: '110px',
                  marginTop: '-38px',
                  color: '#515b9d',
                  zIndex: '999999',
                  position: 'absolute',
                }}
              >
                <button type="submit" className="btn white1 center">
                  <a href="#video" style={{ marginLeft: '0px', color: '#515b9d' }}>
                    How Does it Work?
                  </a>
                </button>
            </h4>
            
            <br />
            <p style={{color:'rgb(95, 95, 95)', marginLeft: '30px', fontSize:'15px', marginTop:'-15px'}}> Don't have an account?<Link to="/signup" className="signup-prompt" style={{ color: '#515b9d' }}>Sign up for free</Link></p>
            
          </div>

          <div className="col-4">
            <img
              src="/static/home6.png"
              width="1890"
              height="855"
              alt="Home Visual"
              className="home-image"
            />
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="container">
        <div className="col">
          <br /><br />
          <hr />
        </div>
      </div>

      <section>
        <div className="container py-5">
          <span className="badge text-bg-light block margin-auto">
            <h4 style={{ fontSize: '15px', margin: '3.5px', color: 'rgb(51, 51, 51)' }}>
              Dr. Reddy's MediScan
            </h4>
          </span>
          <h1 style={{ fontSize: '60px', textAlign: 'center' }}>Get your prescriptions digitalized.</h1>
          <p style={{ color: 'rgb(95, 95, 95)', fontSize: '20px', textAlign: 'center' }}>
            Get your handwritten medical prescription into a readable format using our tool.
          </p>
          <br /><br />
        </div>
      </section>

      {/* Video Display */}
      <section id="video" style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
        <br />
        <video width="1100" height="640" controls>
          <source src="/static/how_it_works.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br /><br /><br />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
