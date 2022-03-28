import React from "react";
import "./resume.css";
import SinglePagePDFViewer from "./single-page";
import samplePDF from "../../assets/Resume.pdf";

export default function Resume() {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <div className="pdf-page">
      <SinglePagePDFViewer pdf={samplePDF} />
      </div>
      <hr />
    </section>
  );
}
