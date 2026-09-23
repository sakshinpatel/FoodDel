import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="CraveKart Logo" />
          <p>
            CraveKart delivers flavorful meals right to your doorstep. From local street favorites to gourmet dining, our mission is to satisfy your food cravings with speed, fresh quality, and utmost care.
          </p>
          <div className="footer-social-icons">
            <a href="https://github.com/sakshinpatel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://github.com/sakshinpatel" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://github.com/sakshinpatel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>contact@cravekart.com</li>
            <li><a href="https://github.com/sakshinpatel" target="_blank" rel="noopener noreferrer">github.com/sakshinpatel</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2026 CraveKart. Built and maintained by Sakshi Patel. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
