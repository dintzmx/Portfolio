import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";  // Assuming you have a Particle background like the Resume page
import pdf from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Gear List 2024.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function GearList() {
  const [width, setWidth] = useState(1200);

  // Responsive scaling for PDF
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle /> {/* Background effect for consistency */}
      
      {/* Top Download Button */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Gear List
        </Button>
      </Row>

      {/* PDF Viewer */}
      <Row className="resume">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>

      {/* Bottom Download Button */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Gear List
        </Button>
      </Row>
    </Container>
  );
}

export default GearList;