import React from "react";
import Carousel from "react-elastic-carousel";
import "./portfolio.css";

// importing Portfolio images 
// import placeholder from "../../assets/placeholder.png";
import batman from "../../assets/html-portfolio.png";
import pass from "../../assets/pass-gen.png";
import quiz from "../../assets/code-quiz.png";
import dunder from "../../assets/dunder.png";
import budget from "../../assets/budget-this.png";
import tutorial from "../../assets/tutorial.png";

//todo: edit sizes to fit slides
const Portfolio = () => {
  return (
    <section id="portfolio">
      PORTFOLIO
      <Carousel>
        <article className="item">
          <a
            href="https://rehtribution.github.io/2-portfolio/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={batman} alt="Fun html portfolio example" />
          </a>
        </article>

        <article className="item">
          <a
            href="https://rehtribution.github.io/3-password-gen/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pass} alt="Password generator homepage" />
          </a>
        </article>

        <article className="item">
          <a
            href="https://rehtribution.github.io/4-code-quiz/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={quiz} alt="Javascript quiz homepage" />
          </a>
        </article>

        <article className="item">
          <a
            href="https://github.com/Rehtribution/10-dundermiff"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dunder} alt="Team generator app example" />
          </a>
        </article>

        <article className="item">
          <a
            href="https://budget--this.herokuapp.com/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={budget} alt="Budget tracker app example" />
          </a>
        </article>

        <article className="item">
          <a
            href="https://gist.github.com/Rehtribution/1363894472a9b7c16953a33a119fe2b5"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tutorial} alt="Gist Regex tutorial" />
          </a>
        </article>
      </Carousel>
    </section>
  );
};

export default Portfolio;
