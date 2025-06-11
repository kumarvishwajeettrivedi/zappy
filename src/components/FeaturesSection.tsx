import React from "react";
import "./styles/FeaturesSection.css";

const features = [
  {
    title: "Earn extra on your way",
    position: "top-left",
  },
  {
    title: "Make online presence",
    position: "center-left",
  },
  {
    title: "Shop Fresh and fast",
    position: "bottom-left",
  },
  {
    title: "Send anything form A to B",
    position: "top-center",
  },
  {
    title: "Shop form Your fav Store",
    position: "top-right",
  },
  {
    title: "Same as store price",
    position: "bottom-right",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Features</h2>

      <div className="features-wrapper">
        {/* Center Mobile */}
        <div className="center-mobile" />

        {/* Feature Boxes */}
        {features.map((feature, index) => (
          <div key={index} className={`feature-box ${feature.position}`}>
            <div className="feature-square" />
            <div className={`arrow ${feature.position}`} />
            <p className="feature-text">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
