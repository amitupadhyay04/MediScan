import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './App.css'; // Importing the main CSS file

const Home = () => {
  // Blob animation logic inside useEffect to ensure it runs after rendering
  useEffect(() => {
    const blob = document.querySelector('.blob');
    const container = document.querySelector('.container');
    let mouseX = 0;
    let mouseY = 0;
    let blobX = 0;
    let blobY = 0;
    let speed = 0.05;
    let offset = 100;

    container.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      blobX = mouseX - blob.clientWidth / 2 - offset;
      blobY = mouseY - blob.clientHeight / 2 - offset;
      blob.style.transform = `translate(${blobX}px, ${blobY}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="container blob-container">
        <div className="blob"></div>
        <div id="blur"></div>
      </div>

      <div className="content-container">
        <div className="row">
          <div className="col-8">
            <h1 className="main-title">
              Translate your handwritten <br /> text into a readable format, <br /> with Scan Plus+
            </h1>
            <p className="subtitle">
              Create and save your prescription from any device, anywhere.
            </p>
            <Link to="/scan">
              <button className="btn lightpurple alignscan">Scan</button>
            </Link>
            <p className="signup-prompt">
              Don't have an account? <Link to="/signup">Sign up for free</Link>
            </p>
          </div>
          <div className="col-4">
            <img
              src="/static/home6.png"
              width="1890"
              height="855"
              className="home-image"
              alt="home"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
