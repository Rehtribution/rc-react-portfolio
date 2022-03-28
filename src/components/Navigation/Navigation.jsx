import React, { useState } from "react";
import "./navigation.css";

const Navigation = () => {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <div>
        {/* content anchors */}
        <a
          href="# "
          onClick={() => setActive("#")}
          className={active === "#" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setActive("#about")}
          className={active === "#about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#portfolio"
          onClick={() => setActive("#portfolio")}
          className={active === "#portfolio" ? "active" : ""}
        >
          Portfolio
        </a>
        <a
          href="#resume"
          onClick={() => setActive("#resume")}
          className={active === "#resume" ? "active" : ""}
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={() => setActive("#contact")}
          className={active === "#contact" ? "active" : ""}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
