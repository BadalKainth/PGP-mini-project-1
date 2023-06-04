import React from "react";
import image from "../assets/Image.png";
import "./Screen1.css";

function Screen1() {
  return (
    <>
      <main>
        <div className="screen1">
          <div className="container-info">
            <h1>An inspiring design delivered to your inbox every morning!</h1>
            <p className="main-para">
              Our team scouts the internet for the best designs, illustrations
              and art and delivers a truly inspiring one every day to your
              inbox.
            </p>
            <strong className="strong-text">Show me how it looks..</strong>
            <div className="email">
              <input
                className="email-input"
                type="text"
                placeholder="Your e-mail address"
              />
              <a href="./Screen2" className="register-btn">
                Register Now
              </a>
            </div>
          </div>
          <div className="container-image">
            <img src={image} alt="Image1" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Screen1;
