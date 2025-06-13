import React from "react";
import "./styles/herosection.css";
import playstoreIcon from '../assets/images/playstore.png';
import doodlePath from '../assets/images/Group 16.png';
import mainScreen from '../assets/images/main-screen.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="content-grid">
          {/* Left Side */}
          <div className="text-content">
            <p className="hero-title">Logizee</p>
            <p className="hero-subtitle">
              One roof solution for all kind of delivery needs
            </p>
            <p className="crafted-text">Crafted with ❤️ in Sikkim</p>

            <div className="download-section">
              <p className="download-text">Get it on</p>
              <img
                src={playstoreIcon}
                alt="Download on Google Play"
                style={{ width: "200px", height: "auto", cursor: "pointer" }}
                onClick={() => window.open("#", "_blank")}
              />


            </div>
          </div>
{/* doodle icons */}
<div className="doodle-container">
    <img src={doodlePath} alt="doodle-animation" />
  </div>

          {/* Right Side - QR Phone UI */}
          {/* Right Side - App Screenshot Image */}
<div className="mockup-wrapper">
  <img src={mainScreen} alt="App Preview" className="app-screenshot" />
</div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll down</span>
        <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 16.5L6 10.5h12Z" />
        </svg>
      </div>


      {/* Bottom Curve */}
      <div className="bottom-curve"></div>
    </section>
  );
};

export default HeroSection;
