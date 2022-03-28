import React from "react";
import Resume from "../../assets/Resume.pdf";
import Headshot from "../../assets/headshot.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h1>Reht Cavazos</h1>
      <h2>Fullstack Web Developer</h2>
      {/* self pic */}
      <div className="Reht">
        <img src={Headshot} alt="Reht Cavazos headshot" />
      </div>
      {/* buttons to download resume or open contact form  */}
      <div className="contact-buttons">
        <a href={Resume} download className="btn">
          Download Resume
        </a>
        <a href="#contact" className="btn btn-primary">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
