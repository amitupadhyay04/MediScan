import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css'; // Import the main CSS file for shared styles

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
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Header />

      <div className="contact-row row p-5">
        <div className="col-5">
          <div className="shiftleftimg2">
            <img src="/static/map.jpeg" alt="Map" className="contact-map" />
          </div>
        </div>

        <div className="col-7">
          <h1 className="contact-heading">Get in touch with us.</h1>
          <p className="contact-subheading">Contact us in any way you choose.</p>

          <table className="table table-borderless contact-table">
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
        <h1 className="contact-heading-small">Or ask us to get in touch with you.</h1>
        <p className="contact-subheading-small">Choose how you would like to hear from Dr. Salunke's.</p>

        <form onSubmit={handleSubmit} className="contact-form">
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

          <button type="submit" className="btn btn-light contact-button">
            <h4 className="contact-button-text">Send</h4>
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
