import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import background from './Images/backgd.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
  
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid !';
    }

    
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters !';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch('http://localhost:7000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        localStorage.setItem('token', data.token);  // storing jwt token
        navigate('/homepage');
      } else {
        if (response.status === 401) {
          alert('Invalid username or password. Please try again.');
        } else {
          alert(data.message || 'An unexpected error occurred. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div>
      <img src={background} alt="Background" className="image" />
      <div className="col-1-log">
        <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}

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
