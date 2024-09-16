import React, { useState } from 'react';
import Header from './Header'; // Assuming you have Header.js
import Footer from './Footer'; // Assuming you have Footer.js

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Header />

      <div className="row p-5">
        <div className="col-5">
          <div className="shiftleftimg2">
            <img src="/static/map.jpeg" alt="Map" height="500px" width="450px" style={{ marginLeft: '150px' }} />
          </div>
        </div>

        <div className="col-7">
          <h1 style={{ fontSize: '60px', marginLeft: '140px' }}>Get in touch with us.</h1>
          <p style={{ color: 'rgb(95, 95, 95)', fontSize: '20px', marginLeft: '140px' }}>Contact us in any way you choose.</p>

          <table className="table table-borderless" style={{ marginLeft: '140px' }}>
            <tbody>
              <tr>
                <th>Phone number</th>
                <td>1800 425 0014</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>customerservices@drsalunke.com</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>CID Bureau, 8-2-377 Road No. 3, Mumbai, Maharashtra 400001, India</td>
              </tr>
              <tr>
                <th>Hours</th>
                <td>Monday - Friday, 6.00AM - 9.00PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container">
        <h1 style={{ fontSize: '60px', marginLeft: '100px' }}>Or ask us to get in touch with you.</h1>
        <p style={{ color: 'rgb(95, 95, 95)', fontSize: '20px', marginLeft: '100px' }}>Choose how you would like to hear from Dr. Salunke's.</p>

        <form onSubmit={handleSubmit} style={{ marginRight: '150px' }}>
          <div className="mb-3 leftside">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 leftside">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 leftside">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 leftside">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 leftside">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              name="message"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          <button type="submit" className="btn btn-light white1 center leftside" style={{ width: '70px', borderColor: '#646464' }}>
            <h4 style={{ fontSize: '15px', margin: '4px', color: 'rgb(100, 55, 184)' }}>Send</h4>
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
