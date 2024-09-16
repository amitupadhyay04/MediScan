import React from 'react';
import Header from './Header'; // Assuming you have Header.js
import Footer from './Footer'; // Assuming you have Footer.js

const About = () => {
  return (
    <div>
      <Header />

      <div className="container" style={{ marginTop: '200px', marginBottom: '200px' }}>
        <div className="row">
          <div className="col-8">
            <h1 style={{ fontSize: '60px' }}>Serving our community with a smile. <img src="/static/smiley.png" width="50" height="50" alt="Smiley" /></h1>
            <p style={{ color: 'rgb(95, 95, 95)', fontSize: '20px', marginTop: '10px' }}>Good health can't wait.</p>

            <form action="/contact">
              <button type="submit" className="btn btn-light white1" style={{ width: '130px', borderColor: '#646464' }}>
                <h4 style={{ fontSize: '15px', margin: '4px', color: 'rgb(100, 55, 184)' }}>Contact Us</h4>
              </button>
            </form>

            <p style={{ color: 'rgb(95, 95, 95)', fontSize: '15px', marginTop: '10px' }}>
              Don't have an account? <a href="/signup" style={{ color: 'rgb(100, 55, 184)' }}>Sign up for free</a>
            </p>
          </div>

          <div className="col-4">
            <video width="847" height="480" autoPlay muted loop style={{ border: '4px solid black' }}>
              <source src="/static/about.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="container py-5">
          <h1 style={{ textAlign: 'center', fontSize: '60px' }}>
            A skilled team you can rely on to care.
            <br />
            You can be sure that your healthcare team has your best interests at heart.
          </h1>

          <p style={{ textAlign: 'center', color: 'rgb(95, 95, 95)', fontSize: '20px' }}>
            We are a pharmaceutical company committed to providing access to affordable and innovative medicines.
          </p>
          <p style={{ textAlign: 'center', color: 'rgb(95, 95, 95)', fontSize: '20px' }}>
            We've been around a long time and we're not going anywhere.
          </p>
          <p style={{ textAlign: 'center', color: 'rgb(95, 95, 95)', fontSize: '20px' }}>
            We aspire to create an environment in which people can realise their full potential through work and continuous learning.
          </p>

          <button onClick={() => window.location.href='/contact'} className="btn btn-light purple1" style={{ backgroundColor: 'rgb(100, 55, 184)', display: 'flex', margin: 'auto' }}>
            <h4 style={{ fontSize: '15px', color: 'rgb(255, 255, 255)', textAlign: 'center' }}>Book Online</h4>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
