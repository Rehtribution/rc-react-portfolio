import React from 'react';
import "./navigation.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useState } from 'react';

const Navigation = () => {

  const [active, setActive] = useState("#");

  return (
    <nav>
      <div>
        {/* content anchors */}
        <a href="#" 
        onClick={() => setActive("#")} 
        className={active === "#" ? "active" : ""}>
          home
        </a>
        
        <a href="#about" onClick={() => setActive("#about")} className={active === "#about" ? "active" : ""}>
          about
        </a>
        <a
          href="#portfolio"
          onClick={() => setActive("#portfolio")} className={active === "#portfolio" ? "active" : ""}
        >
          portfolio
        </a>
        <a href="#resume" onClick={() => setActive("#resume")} className={active === "#resume" ? "active" : ""}>
          resume
        </a>
        <a href="#contact" onClick={() => setActive("#contact")} className={active === "#contact" ? "active" : ""}>
          contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
