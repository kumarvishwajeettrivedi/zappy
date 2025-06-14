import React from "react";
import "./styles/appdownloadsection.css";
import playstoreIcon from '../assets/images/playstore.png';
import phonedownload from '../assets/images/phonedownload.png';
import curveLine1 from '../assets/images/Group 17.png';


const AppDownloadSection = () => {
  return (
    <section className="app-download-section">
<img src={curveLine1} alt="decorative curve1" className="background-curve-line3" />
<img src={curveLine1} alt="decorative curve1" className="background-curve-line4" />

      <div className="app-download-card">
        <div className="app-download-grid">

          {/* Left Content */}
          <div className="app-download-left">
            <h2 className="app-download-heading">Get the app on</h2>
            <p className="app-download-subheading">
              Everything Nearby, Instantly at Your Door
            </p>

            <img
                src={playstoreIcon}
                alt="Download on Google Play"
                className="playstoreimage"
                style={{ width: "180px", height: "auto", cursor: "pointer" }}
                onClick={() => window.open("#", "_blank")}
              />
          </div>

          <div className="app-download-right">
            <img
              src={phonedownload}
              alt="App Demo"
              style={{ width: "480px", height: "auto", cursor: "pointer" }}
 
              className="phone-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
