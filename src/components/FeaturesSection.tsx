import React from "react";
import "./styles/featuresSection.css";
import Arrow1 from "../assets/images/arrow1.png";
import Arrow2 from "../assets/images/arrow2.png";
import Arrow3 from "../assets/images/arrow3.png";
import Arrow4 from "../assets/images/arrow4.png";
import Arrow5 from "../assets/images/arrow5.png";
import Arrow6 from "../assets/images/arrow6.png";
import mainscreenpart1 from "../assets/images/main-screen1.png";
import mainscreenpart2 from "../assets/images/main-screen3.png";
import onlinePresence from "../assets/images/onlinePresence.png";
import freshAndFast from "../assets/images/freshandfast.png";
import earnextra from "../assets/images/earnextra.png";
import deliverAtoB from "../assets/images/deliverAtoB.png";
import shopformfav from "../assets/images/shopformfav.png";
import sameasstore from "../assets/images/sameasstore.png";


const features = [
  { title: "Earn extra on your way", position: "top-left", arrow: Arrow1, image: earnextra, className: "image-earn" },
  { title: "Make online presence", position: "center-left", arrow: Arrow2, image: onlinePresence, className: "image-online" },
  { title: "Shop Fresh and fast", position: "bottom-left", arrow: Arrow3, image: freshAndFast, className: "image-fresh" },
  { title: "Send anything from A to B", position: "top-center", arrow: Arrow4, image: deliverAtoB, className: "image-send" },
  { title: "Shop from Your fav Store", position: "top-right", arrow: Arrow5, image: shopformfav, className: "image-shop" },
  { title: "Same as store price", position: "bottom-right", arrow: Arrow6, image: sameasstore, className: "image-same" },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Features</h2>

      <div className="features-wrapper">
  <div className="center-mobile">
    <div className="scroll-content">
      <img src={mainscreenpart1} alt="screen1" />
      <img src={mainscreenpart2} alt="screen2" />
    </div>
  </div>

  {features.map((feature, index) => (
  <div key={index} className={`feature-box ${feature.position}`}>
    <img
      src={feature.arrow}
      alt="arrow"
      className={`arrow-image ${feature.position}-arrow`}
    />
    <div className="feature-square">
    <img
  src={feature.image}
  alt={feature.title}
  className={`feature-image ${feature.className}`}
/>
    </div>
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
