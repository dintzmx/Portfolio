import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BTSProjectCards from "./BTSProjectCards";
import Particle from "../Particle";

function BTS() {
  return (
    <Container fluid className="bts-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Behind the <strong className="purple">Scenes</strong>
        </h1>
        <p style={{ color: "white" }}>
          A compilation of vlogs that focus on the different G&E teams I work with!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <BTSProjectCards
              demoLink="https://www.youtube.com/watch?v=b8mGsLxMbJU"
              title="'Scream 'Til You Bleed' (Fall 2024)"
              description="Runtime: 25 minutes & 13 seconds"
            />
          </Col> */}
          <Col md={4} className="project-card">
            <BTSProjectCards
              demoLink="https://www.youtube.com/watch?v=E5gLq6XPwbU"
              title="'Marble Tissues' (Spring 2024)"
              description="Runtime: 16 minutes & 19 seconds"
            />
          </Col>
        </Row>

        {/* New Section */}
        <h2 className="project-heading" style={{ marginTop: "50px" }}>
          Other <strong className="purple">Featured Projects</strong>
        </h2>
        <p style={{ color: "white" }}>
          Other hats I've worn!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BTSProjectCards
              demoLink="https://player.vimeo.com/video/885461345"
              title="ScrubDaddy (Spec)"
              description={
                <>
                  Role: Director/DP<br />
                  <span style={{ marginLeft: "0px" }}>Runtime: 1 Minute</span>
                </>
               }
            />
          </Col>
          <Col md={4} className="project-card">
            <BTSProjectCards
              demoLink="https://www.youtube.com/watch?v=Ik794RQCtr4"
              title="Bowl of Burritos (Short)"
              description={
                <>
                  Role: Director<br />
                  <span style={{ marginLeft: "0px" }}>DP: Anni Newton</span>
                </>
               }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BTS;