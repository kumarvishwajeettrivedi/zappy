import React, { useEffect, useRef, useState } from "react";
import "./styles/aboutsection.css";
import curveLine1 from '../assets/images/Line 4.png';
import curveLine2 from '../assets/images/Line 3.png';
import choth2 from '../assets/images/cloths1.jpg';
import food from '../assets/images/food.png';
import grocery from '../assets/images/grocery-main.png';
import parcel from '../assets/images/parcel.png';
import playstore from '../assets/images/playstoreicon.png';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <img src={curveLine1} alt="decorative curve1" className="background-curve-line1" />
      <img src={curveLine2} alt="decorative curve2" className="background-curve-line2" />

      <div className="about-container">
        {/* Center Text */}
        <div className={`about-text ${isVisible ? 'animate-fade-in' : ''}`}>


          <h2>
            Everything You Need —
            <span className="gradient-text"> Delivered Fast</span> and Reliably
          </h2>

          <div className="about-paragraphs">
            <p className="lead-paragraph">
              From food and medicine to groceries, fashion, and more. Zappy connects you to your favorite local stores with ease.
            </p>
            <p>
              Experience the charm of window shopping, re-imagined for the digital age.
            </p>
            <p>
              We're a marketplace built to empower local shops, restaurants, hotels, and businesses.
            </p>
          </div>

        </div>

        <div className={`about-image-box top-right-box ${isVisible ? 'animate-in' : ''}`}>
          <div className="image-content medicine">
          <img src={food} alt="food" className="image-fit" />

            <div className="image-overlay">
              <h4>Food Delivery</h4>
              <p>Fresh & Fast</p>

            </div>
          </div>
        </div>

        {/* Animated Image Boxes - Professional Images */}
        <div className={`about-image-box top-left-box ${isVisible ? 'animate-in' : ''}`}>
          <div className="image-content food-delivery">
          <img src={parcel} alt="parcel" className="image-fit" />

            <div className="image-overlay">
              <h4>Parcel</h4>
              <p>Anything Anywhere</p>
            </div>
          </div>
        </div>



        <div className={`about-image-box bottom-left-box ${isVisible ? 'animate-in' : ''}`}>
          <div className="image-content grocery">
          <img src={grocery} alt="grocery" className="image-fit" />

            <div className="image-overlay">
              <h4>Groceries</h4>
              <p>Daily Essentials</p>
            </div>
          </div>
        </div>

        <div className={`about-image-box bottom-right-box ${isVisible ? 'animate-in' : ''}`}>
          <div className="image-content fashion">
            <img src={choth2} alt="Fashion" className="image-fit" />
            <div className="image-overlay">
              <h4>Fashion</h4>
              <p>Style & Trends</p>
            </div>
          </div>
        </div>


        {/* Background Decorative Elements */}
        <div className="bg-decoration-1"></div>
        <div className="bg-decoration-2"></div>
      </div>

      <div className="download-button-container">
  <a 
    href="/#" 
    className="download-button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href = '/#';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
  >
    <span className="button-text">Download the app</span>
    <span className="play-store-icon">
      <img 
        src={playstore} 
        alt="Play Store" 
        className="play-store-image" 
        style={{ 
          width: '100%',
          height: '100%',
          scale:'1.5',
          objectFit: 'cover' 
        }} 
      />
    </span>
  </a>
</div>

    </section>
  );
};

export default AboutSection;