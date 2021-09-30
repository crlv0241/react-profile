import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div className="aboutSection">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h1>We work to make</h1>
          </div>
          <div className="hide">
            <h1>
              your <span>dreams</span>{" "}
            </h1>
          </div>
          <div className="hide">
            <h1>come true</h1>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut
          officiis deleniti vel dolor, perferendis, atque nemo eum perspiciatis
          pariatur repellendus maxime doloribus praesentium?
        </p>
        <button>Contact Us</button>
      </div>

      <div className="image">
        <img src={home1} alt="Man holding a camera" />
      </div>
    </div>
  );
};

export default AboutSection;
