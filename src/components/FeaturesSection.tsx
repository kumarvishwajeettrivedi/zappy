import React from "react";
import "./styles/featuresSection.css";
import Arrow1 from "../assets/images/arrow1.png";
import Arrow2 from "../assets/images/arrow2.png";
import Arrow3 from "../assets/images/arrow3.png";
import Arrow4 from "../assets/images/arrow4.png";
import Arrow5 from "../assets/images/arrow5.png";
import Arrow6 from "../assets/images/arrow6.png";

const features = [
  { title: "Earn extra on your way", position: "top-left", arrow: Arrow1 },
  { title: "Make online presence", position: "center-left", arrow: Arrow2 },
  { title: "Shop Fresh and fast", position: "bottom-left", arrow: Arrow3 },
  { title: "Send anything from A to B", position: "top-center", arrow: Arrow4 },
  { title: "Shop from Your fav Store", position: "top-right", arrow: Arrow5 },
  { title: "Same as store price", position: "bottom-right", arrow: Arrow6 },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Features</h2>

      <div className="features-wrapper">
        <div className="center-mobile" />

        {features.map((feature, index) => (
          <div key={index} className={`feature-box ${feature.position}`}>
            <img
              src={feature.arrow}
              alt="arrow"
              className={`arrow-image ${feature.position}-arrow`}
            />
            <div className="feature-square" />
            <div className="text-wrapper">
              <p className="feature-text">{feature.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
