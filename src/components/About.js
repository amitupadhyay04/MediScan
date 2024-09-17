import React from 'react';
import Header from './Header'; // Assuming you have Header.js
import Footer from './Footer'; // Assuming you have Footer.js
import './App.css'; // Import your main CSS file

const About = () => {
  return (
    <div>
      <Header />

      <div className="about-container">
        <div className="row">
          <div className="col-8">
            <h1 className="about-heading">
              Serving our community with a smile. <img src="/static/smiley.png" width="50" height="50" alt="Smiley" />
            </h1>
            <p className="about-text">Good health can't wait.</p>

            <form action="/contact">
              <button type="submit" className="btn btn-light white1 contact-btn">
                <h4 className="contact-btn-text">Contact Us</h4>
              </button>
            </form>

            <p className="about-signup">
              Don't have an account? <a href="/signup" className="signup-link">Sign up for free</a>
            </p>
          </div>

          <div className="col-4">
            <video width="847" height="480" autoPlay muted loop className="about-video">
              <source src="/static/about.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="container py-5">
          <h1 className="about-team-heading">
            A skilled team you can rely on to care.
            <br />
            You can be sure that your healthcare team has your best interests at heart.
          </h1>

          <p className="about-paragraph">We are a pharmaceutical company committed to providing access to affordable and innovative medicines.</p>
          <p className="about-paragraph">We've been around a long time and we're not going anywhere.</p>
          <p className="about-paragraph">We aspire to create an environment in which people can realise their full potential through work and continuous learning.</p>

          <button onClick={() => window.location.href='/contact'} className="btn btn-light purple1 book-btn">
            <h4 className="book-btn-text">Book Online</h4>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
