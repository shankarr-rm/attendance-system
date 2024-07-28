import React from 'react';
import './Footer.css';
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
          To inspire and empower every student to achieve their full potential and become responsible, innovative global citizens.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
        <div className="icon-details"><div className="icon"><SiGooglemaps/></div><div className="detail">29/8 Kandy Road Jaffna</div></div>
        <div className="icon-details"><div className="icon"><FaPhoneAlt/></div><div className="detail">+94 77 490 5464</div></div>
        <div className="icon-details"><div className="icon"><SiGmail/></div><div className="detail"><a href="mailto:info@abcd.com">info@hmk.com</a></div></div>

        </div>
        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <form>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 School App. All rights reserved.</p>
        <div className="social-media">
      
          <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
