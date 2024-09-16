import React, { useState } from 'react';
import Header from './Header'; // Assuming you've created Header.js
import Footer from './Footer'; // Assuming you've created Footer.js
import axios from 'axios';

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
      <div className="container py-5 display-4" style={{ display: 'flex', justifyContent: 'center' }}>
        <span className="badge text-bg-light">
          <h4 className="m-0 p-0" style={{ fontSize: '15px', margin: '3.5px', color: 'rgb(51, 51, 51)' }}>ScanPlus+</h4>
        </span>
      </div>

      <div className="container">
        <h1 style={{ fontSize: '60px', textAlign: 'center' }}>ScanPlus+</h1>
        <p style={{ color: 'rgb(95, 95, 95)', fontSize: '20px', textAlign: 'center' }}>
          Upload a clear picture of your prescription.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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

          <button type="submit" className="btn btn-light purple1 center" style={{ backgroundColor: 'rgb(100, 55, 184)', display: 'flex', justifyContent: 'center' }}>
            <h4 style={{ fontSize: '15px', color: '#fff', textAlign: 'center' }}>Upload</h4>
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Scan;
