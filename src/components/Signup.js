import React, { useState } from 'react';
import Header from './Header'; // Assuming you've created Header.js
import Footer from './Footer'; // Assuming you've created Footer.js
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '0',
    location: '0',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signup', formData);
      console.log('Signup success:', response.data);
      // Handle success
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error
    }
  };

  return (
    <div>
      <Header />
      <div className="container jumbotron p-5">
        <h1 className="text-center">Create your Account</h1>
        <br />

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  name="dob"
                  type="date"
                  className="form-control"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  className="form-select"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                  <option value="2">Other</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label className="form-label">Location</label>
                <select
                  name="location"
                  className="form-select"
                  value={formData.location}
                  onChange={handleChange}
                >
                  <option value="0">Hyderabad</option>
                  <option value="1">Bengaluru</option>
                  <option value="2">Malkajgiri</option>
                  <option value="3">Srikakulam</option>
                  <option value="4">Sangareddy</option>
                  <option value="5">Solan</option>
                  <option value="6">Malkajgiri</option>
                  <option value="7">Visakhapatnam</option>
                  <option value="8">Nalgonda</option>
                </select>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-light purple1 center" style={{ backgroundColor: '#515b9d' }}>
            <p style={{ color: '#fff', marginBottom: 0 }}>Submit</p>
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
