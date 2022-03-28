import React from "react";
import "./resume.css";
import SinglePagePDFViewer from "./single-page";
import samplePDF from "../../assets/Resume.pdf";

export default function App() {
  return (
    <div className="App">
      <h4>Single Page</h4>
      <div className="pdf-page">
      <SinglePagePDFViewer pdf={samplePDF} />
      </div>
      <hr />
    </div>
  );
}