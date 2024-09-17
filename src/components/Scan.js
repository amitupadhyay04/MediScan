import React, { useState } from 'react';
import Header from './Header'; // Assuming you've created Header.js
import Footer from './Footer'; // Assuming you've created Footer.js
import axios from 'axios';
import './App.css'; // Import your main CSS file

const Scan = () => {
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState(null);

  const handleFileChange = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('picture', picture);

    try {
      const response = await axios.post('/scan', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload success:', response.data);
      // Handle success response
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error
    }
  };

  return (
    <div>
      <Header />
      <div className="scan-header-container">
        <span className="badge text-bg-light scan-badge">
          <h4 className="scan-header">ScanPlus+</h4>
        </span>
      </div>

      <div className="container">
        <h1 className="scan-title">ScanPlus+</h1>
        <p className="scan-description">Upload a clear picture of your prescription.</p>

        <form onSubmit={handleSubmit} className="scan-form">
          <div className="mb-3">
            <label className="form-label">Enter email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="form-label">Upload prescription image (.jpeg/.jpg/.gif format only)</label>
            <input
              name="picture"
              type="file"
              className="form-control"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleFileChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-light purple1 scan-btn">
            <h4 className="scan-btn-text">Upload</h4>
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Scan;
