import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-overlay">
        <h1 className="welcome-heading">Welcome to Our Platform</h1>
        <p className="welcome-caption">Your journey to excellence begins here.</p>
        <p className="welcome-about">
        Track and manage student attendance efficiently. Ensure accurate records and support student success.        </p>
        <button className="welcome-button">Get Started</button>
      </div>
    </div>
  );
}

export default Welcome;
