import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer id="footer">
      <h1>Contact me</h1>
      <h2>Follow me on GitHub or reach out to me on LinkedIn!</h2>
      <div className="center">
        <a
          href="https://github.com/Rehtribution"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" color="primary" />
        </a>
        <a
          href="https://www.linkedin.com/in/just-reht/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" color="primary" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
