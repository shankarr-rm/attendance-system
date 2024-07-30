import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import background from './Images/backgd.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Handle successful login
        navigate('/homepage');
      } else {
        alert(data.message); // Handle failed login
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div>
      <img src={background} alt="Background Image" className="image" />
      <div className="col-1-log">
        <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn">Log In</button>
        </form>

        <div className="additional-links">
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password</a>
          </div>
        </div>
      </div>
    </div>
  );
}
