import React from "react";
import SinglePagePDFViewer from "./single-page";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../../assets/Resume.pdf";

export default function App() {
  return (
    <div className="App">
      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={samplePDF} />
      <hr />
    </div>
  );
}