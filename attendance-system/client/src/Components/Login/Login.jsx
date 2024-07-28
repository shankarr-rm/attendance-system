
import React from 'react';
import './Login.css';
import background from './Images/backgd.png';

export default function Login() {

  return (
    <div>
      <img src={background} alt="Background Image" className="image" />
      <div className="col-1-log">
        <form id='form' className='flex flex-col' >
          <input
            type="text"
            placeholder='Email'
          />

          <input
            type="password"
            placeholder='Password'
            required
          />

          <button type="submit" className='btn'>Log In</button>
        </form>

        <div className="additional-links">
          
        <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot pasword</a>
              </div>    
        </div>
      </div>
    </div>
  );
}
