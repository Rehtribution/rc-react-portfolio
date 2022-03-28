import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer>
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
          <LinkedInIcon fontSize="large" color="primary"/>
        </a>
        <a
          href="https://www.youtube.com/channel/UCN-iKuioUO44apiCdmrGcsg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon fontSize="large" color="primary"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
