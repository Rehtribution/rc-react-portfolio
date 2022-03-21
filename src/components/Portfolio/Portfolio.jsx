import React from "react";
import Carousel from "react-elastic-carousel";
import "./portfolio.css";


const breakPoints = [
  { width: 1, items: 1 },
  { width: 1, items: 2 },
  { width: 1, items: 3 },
  { width: 1, items: 4 },
  { width: 1, items: 5 },
  { width: 1, items: 6 }
];

const Portfolio = () => {
  return <section id="portfolio">PORTFOLIO
    <Carousel breakPoints={breakPoints}>
      <div className="item">one</div>
      <div className="item">two</div>
      <div className="item">three</div>
      <div className="item">four</div>
      <div className="item">five</div>
      <div className="item">six</div>
    </Carousel>
  </section>;
};

export default Portfolio;
