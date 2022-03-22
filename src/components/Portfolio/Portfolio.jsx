import React from "react";
import Carousel from "react-elastic-carousel";
import "./portfolio.css";
import first from "../../assets/first.png";
import second from "../../assets/second.png";


const Portfolio = () => {
  return (
    <section id="portfolio">
      PORTFOLIO
      <Carousel>
        <article className="item">
          <a
            href="https://github.com/Rehtribution?tab=repositories&q=&type=&language=&sort=stargazers"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={first} alt="placeholder 1" />
          </a>
        </article>

        <article className="item">
          <a
            href="https://github.com/Rehtribution?tab=repositories&q=&type=&language=&sort=stargazers"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={second} alt="placeholder 1" />
          </a>
        </article>

        <article className="item">
          <a
            href="https://github.com/Rehtribution?tab=repositories&q=&type=&language=&sort=stargazers"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={second} alt="placeholder 1" />
          </a>
        </article>

        <article className="item">
          <a
            href="https://github.com/Rehtribution?tab=repositories&q=&type=&language=&sort=stargazers"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={second} alt="placeholder 1" />
          </a>
        </article>

        <article className="item">
          <a
            href="https://github.com/Rehtribution?tab=repositories&q=&type=&language=&sort=stargazers"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={second} alt="placeholder 1" />
          </a>
        </article>

        <article className="item">
          <a
            href="https://github.com/Rehtribution?tab=repositories&q=&type=&language=&sort=stargazers"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={second} alt="placeholder 1" />
          </a>
        </article>
      </Carousel>
    </section>
  );
};

export default Portfolio;
