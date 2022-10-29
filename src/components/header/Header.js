import React from "react";
import "./Header.css";
import heroLeft from "../images/image-hero-left.png";
import heroRight from "../images/image-hero-right.png";

const Header = () => {
  return (
    <>
      <header>
        <img src={heroLeft} alt="" srcset="" />
        <div id="header-text">
          <h1>
            Group chat <br />
            for everyone
          </h1>
          <p>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>

          <div id="button-container">
            <button id="download">
              <i class="bi bi-cloud-download"></i> Download v1.3
            </button>
            <button id="second_button">What is it?</button>
          </div>
        </div>
        <img src={heroRight} alt="" srcset="" />
      </header>

      <section class="vertical-line">
        <div class="line"></div>
        <div class="number">
          <span>01</span>
        </div>
      </section>

      <section class="horizontal-break">
        <div class="h-line"></div>
        <div class="number">
          <span>01</span>
        </div>
        <div class="h-line"></div>
      </section>
    </>
  );
};

export default Header;
