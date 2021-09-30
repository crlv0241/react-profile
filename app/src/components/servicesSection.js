import React from "react";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <div className="title">
          <h1>
            High <span>quality</span> services
          </h1>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock-icon" />
              <h2>Efficient</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={money} alt="money-icon" />
              <h2>Affordable</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm-icon" />
              <h2>Pro Grade Gear</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork-icon" />
              <h2>Teamwork</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera" />
      </div>
    </div>
  );
};

export default ServicesSection;
