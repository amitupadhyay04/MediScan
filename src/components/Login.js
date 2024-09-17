import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css'; // Import the main CSS file for shared styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      setStatus(response.data.status === 'success' ? 'Login successful!' : 'Invalid credentials!');
    } catch (error) {
      console.error('Login failed:', error);
      setStatus('Login failed');
    }
  };

  return (
    <div className="login-container">
      <Header />

      <div className="login-jumbotron">
        <h1>Log In to Your Account</h1>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {status && (
            <div className={`alert ${status === 'Login successful!' ? 'alert-success' : 'alert-danger'}`} role="alert">
              {status}
            </div>
          )}

          <button type="submit" className="btn btn-secondary purple1">Submit</button>
        </form>

        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
