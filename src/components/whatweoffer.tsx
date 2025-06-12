import React from "react";
import "./styles/whatweoffer.css";
import cityparcel from '../assets/images/cityparcel.png';
import homedelivery from '../assets/images/homedelivery.png';


const WhatWeOffer = () => {
  return (
    <div className="container1">
    <section className="whatweoffer-section">
      <h3 className="whatweoffer-heading">
what We Offer ?      </h3>

      <div className="whatweoffer-grid">
        {/* Left Block */}
        <div className="whatweoffer-item">
          <p>
            Send anything, anywhere — fast, secure, and affordable with Zappy’s delivery solution.
          </p>
          <div className="illustration-box">
              <img
                src={homedelivery}
                alt="Send Parcel Illustration"
                className="whatweoffer-image"
              />
          </div>
        </div>

        {/* Divider */}
        <div className="whatweoffer-divider" />

        {/* Right Block */}
        <div className="whatweoffer-item">
          <p>
            Enable your local business to deliver parcels without worrying about heavy commissions.
          </p>
          <div className="illustration-box">
              <img
                src={cityparcel}
                alt="Business Parcel Illustration"
                className="whatweoffer-image"
              />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default WhatWeOffer;
