import React from "react";
import "./styles/footersection.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-title">Logizee</h3>
          </div>

          {/* For Businesses */}
          <div>
            <h4 className="footer-heading">For Businesses</h4>
            <p className="footer-subtext">Partner with us</p>
          </div>

          {/* For Captains */}
          <div>
            <h4 className="footer-heading">For Captains</h4>
            <p className="footer-subtext">Partner with us</p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="footer-heading">Social Links</h4>
            <div className="footer-social">
              <div className="footer-icon">f</div>
              <div className="footer-icon">t</div>
              <div className="footer-icon">i</div>
              <div className="footer-icon">y</div>
            </div>
          </div>
        </div>

        {/* Learn More aligned under "For Businesses" visually */}
        <div className="footer-learn">
          <h4 className="footer-heading">Learn More</h4>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help & Support</a>
            <div className="footer-contact">
              <p>Contact Us</p>
              <ul>
                <li>
                  <a href="mailto:office.logizee@gmail.com">
                    office.logizee@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners.
            <br />
            2025 © Logizee Solutions LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
