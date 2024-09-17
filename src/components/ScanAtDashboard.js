import React, { useState } from 'react';
import Header from './Header'; // Assuming Header component exists
import Footer from './Footer'; // Assuming Footer component exists
import axios from 'axios';
import './App.css'; // Import the CSS file

const ScanAtDashboard = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('prescription', file);

    try {
      const response = await axios.post('/dashboard/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful:', response.data);
      // Handle response and navigation as needed
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container py-5 title-container">
        <span className="badge text-bg-light">
          <h4 className="m-0 p-0 title-badge">ScanPlus+</h4>
        </span>
      </div>

      <div className="container">
        <h1 className="main-title">ScanPlus+</h1>
        <p className="description">
          Upload a clear picture of your prescription.
        </p>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Upload prescription image (.jpeg/.jpg/.gif format only)
            </label>
            <input
              name="prescription"
              className="form-control"
              type="file"
              id="formFile"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleFileChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-light upload-button"
          >
            <h4 className="upload-button-text">Upload</h4>
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ScanAtDashboard;
