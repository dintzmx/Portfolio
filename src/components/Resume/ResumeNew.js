import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/David Lee CV 2023-2024.pdf";
import { AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// PDF.js worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Handle window resize for responsive scaling
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get total number of pages
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Navigate to the next page
  const nextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  // Navigate to the previous page
  const prevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  // Dynamic PDF scaling based on screen size
  const getScale = () => {
    if (width > 1200) return 1.2;  // Balanced for large screens
    if (width > 786) return 0.9;   // Tablets/laptops
    return 0.6;                    // Mobile
  };

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Top Download Button */}
      <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "20px" }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      {/* PDF Viewer with Navigation Buttons */}
      <Row className="resume" style={{ justifyContent: "center", position: "relative" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
          >
            <div style={{ position: "relative" }}>
              <Page pageNumber={pageNumber} scale={getScale()} />

              {/* Previous Page Button */}
              {numPages > 1 && (
                <Button
                  variant="dark"
                  onClick={prevPage}
                  disabled={pageNumber <= 1}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "5px",
                    transform: "translateY(-50%)",
                    opacity: 0.8,
                    borderRadius: "50%",
                    padding: "6px 10px",
                    zIndex: 10,
                    backgroundColor: "#333",
                    border: "none",
                  }}
                >
                  <AiOutlineLeft size={20} />
                </Button>
              )}

              {/* Next Page Button */}
              {numPages > 1 && (
                <Button
                  variant="dark"
                  onClick={nextPage}
                  disabled={pageNumber >= numPages}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "5px",
                    transform: "translateY(-50%)",
                    opacity: 0.8,
                    borderRadius: "50%",
                    padding: "6px 10px",
                    zIndex: 10,
                    backgroundColor: "#333",
                    border: "none",
                  }}
                >
                  <AiOutlineRight size={20} />
                </Button>
              )}
            </div>
          </Document>
        </div>
      </Row>

      {/* Page Indicator */}
      {numPages > 1 && (
        <Row style={{ justifyContent: "center", marginTop: "10px" }}>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Row>
      )}

      {/* Bottom Download Button */}
      <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;